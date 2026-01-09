import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs-extra';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Serve static files from public/uploads
const PUBLIC_UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
const DATA_DIR = path.join(__dirname, 'data');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');

fs.ensureDirSync(PUBLIC_UPLOADS_DIR);
fs.ensureDirSync(DATA_DIR);

app.use('/uploads', express.static(PUBLIC_UPLOADS_DIR));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PUBLIC_UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Initialize data if needed
const initialProjects = [
    { id: 1, title: 'STC Data center', client: 'Al Moayyed Air Conditioning', image: '/assets/project_datacenter.png', status: 'Ongoing' },
    { id: 2, title: 'KAMC', client: 'NASS Contracting', image: '/assets/project_medical.png', status: 'Ongoing' },
    { id: 3, title: 'AMAS 432 Ministry of Housing', client: 'Al Moayyed Air Conditioning', image: '/assets/project_housing.png', status: 'Ongoing' },
    { id: 4, title: 'Marrassi Residences', client: 'Al moayyed Air Conditioning', image: '/assets/project_residences.png', status: 'Ongoing' },
    { id: 5, title: 'Jesra 400kV Substation', client: 'Al moayyed', image: '/assets/project_substation.png', status: 'Ongoing' },
    { id: 6, title: 'BAPCO', client: 'Industrial Infrastructure', image: '/assets/project_industrial.png', status: 'Ongoing' },
    { id: 7, title: 'PH 100 Grand Mosque', client: 'NASS Contracting', image: '/assets/project_mosque.png', status: 'Ongoing' }
];

if (!fs.existsSync(PROJECTS_FILE)) {
    fs.writeJsonSync(PROJECTS_FILE, initialProjects);
}

// API Routes
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await fs.readJson(PROJECTS_FILE);
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/projects', async (req, res) => {
    try {
        const project = req.body;
        const projects = await fs.readJson(PROJECTS_FILE);

        if (project.id) {
            const index = projects.findIndex(p => p.id === project.id);
            if (index !== -1) {
                projects[index] = project;
            } else {
                projects.push(project);
            }
        } else {
            project.id = Date.now();
            projects.push(project);
        }

        await fs.writeJson(PROJECTS_FILE, projects);
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/projects/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        let projects = await fs.readJson(PROJECTS_FILE);
        projects = projects.filter(p => p.id !== id);
        await fs.writeJson(PROJECTS_FILE, projects);
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ imageUrl });
});

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
