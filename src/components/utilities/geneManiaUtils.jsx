import axios from "axios";
import Cytoscape from "cytoscape";

export async function fetchGeneManiaNetwork(genes, organismId = 4) {
    try {
      const baseUrl = "https://genemania.org/json/search_results";
      const response = await axios.post(baseUrl, {
          organism: organismId,
          genes: genes,
          weighting: "AUTOMATIC_SELECT",
          geneThreshold: genes.length === 1 ? 0 : 20,
          attrThreshold: 0,
        });
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      return response.data;
    } catch (error) {
      console.error("Error:", error.message);
      return { error: { message: error.message } };
    }
}

export const createCytoscape = (id) => {
    const container = document.getElementById(id);
    const cy = new Cytoscape({
      container: container,
      styleEnabled: true,
      userZoomingEnabled: false,
      userPanningEnabled: false,
      boxSelectionEnabled: false,
      selectionType: "single",
    });
    cy.data({ id });
  
    return cy;
};