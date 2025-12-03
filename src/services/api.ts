export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  description: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  status: number;
  message: string;
  data?: T;
  errors?: string[];
}

const API_URL = 'http://localhost:3000/api';

export const api = {
  /**
   * Send contact form data to the backend
   * @param data - Contact form data
   * @returns Promise with API response
   */
  sendContactForm: async (data: ContactFormData): Promise<ApiResponse> => {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      return result;
    } catch (error: any) {
      console.error('API Error:', error);
      return {
        success: false,
        status: 500,
        message: error.message || 'Network error occurred',
        errors: [error.message],
      };
    }
  },
};
