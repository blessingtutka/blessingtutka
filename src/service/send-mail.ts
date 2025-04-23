/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_ENDPOINT_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface ClientMailPayload {
    email: string;
    name: string;
    message: string;
    services: string[];
}

export const sendMail = async (payload: ClientMailPayload): Promise<void> => {
    try {
        await api.post('mail/send/email', payload);
    } catch (error: any) {
        const errorMsg = error.response?.data?.message || 'Failed to send email';
        throw new Error(errorMsg);
    }
};

const mailService = {
    sendMail,
};

export default mailService;
