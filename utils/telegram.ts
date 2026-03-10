export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: 'Contact' | 'Cooperation';
}

export const sendTelegramMessage = async (data: ContactFormData): Promise<boolean> => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    const response = await fetch(`${apiUrl}/api/application`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error('Failed to send application:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending application to backend:', error);
    return false;
  }
};
