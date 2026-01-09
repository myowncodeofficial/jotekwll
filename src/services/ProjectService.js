const API_URL = 'http://localhost:5001/api/projects';

export const getProjects = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (err) {
        console.error('Error fetching projects:', err);
        return [];
    }
};

export const saveProject = async (project) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        });
        return await response.json();
    } catch (err) {
        console.error('Error saving project:', err);
        return [];
    }
};

export const deleteProject = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (err) {
        console.error('Error deleting project:', err);
        return [];
    }
};

export const uploadImage = async (file) => {
    try {
        const formData = new FormData();
        formData.append('image', file);
        const response = await fetch('http://localhost:5001/api/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data.imageUrl;
    } catch (err) {
        console.error('Error uploading image:', err);
        return '';
    }
};
