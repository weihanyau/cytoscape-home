export async function fetchGeneMetadata(geneName) {
    try {
        const response = await fetch(`https://api.geneontology.org/api/bioentity/gene/${geneName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch gene metadata: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching gene metadata:', error);
        throw error;
    }
}

export async function fetchGeneManiaNetwork(geneList) {
    try {
        const response = await fetch(`https://genemania.org/api/network?genes=${geneList.join(',')}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch GeneMania network: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching GeneMania network:', error);
        throw error;
    }
}