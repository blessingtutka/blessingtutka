import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { contactFormSchema, contactSteps } from '@/data';
import { truncater } from '@/utils';
import { z } from 'zod';

type FormSchema = z.infer<typeof contactFormSchema>;

const ContactMultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [stepLabels, setStepLabels] = useState(contactSteps.map((step) => step.label));

    const form = useForm<FormSchema>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            services: [],
            message: '',
        },
        mode: 'onChange',
    });

    const updateStepLabel = (stepIndex: number) => {
        const newStepLabels = [...stepLabels];
        switch (stepIndex) {
            case 1:
                newStepLabels[0] = form.getValues().name || contactSteps[0].label;
                break;
            case 2:
                newStepLabels[1] = form.getValues().email || contactSteps[1].label;
                break;
            case 3:
                newStepLabels[2] = form.getValues().services.join(', ') || contactSteps[2].label;
                break;
            case 4:
                newStepLabels[3] = form.getValues().message || contactSteps[3].label;
                break;
        }
        setStepLabels(newStepLabels);
    };

    const handleNext = async () => {
        const currentFieldName = contactSteps[currentStep - 1].field;
        const isValid = await form.trigger([currentFieldName]);

        if (isValid) {
            updateStepLabel(currentStep);
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const onSubmit = async () => {
        const isValid = await form.trigger();
        if (isValid) {
            const values = form.getValues();
            console.log('Form Data:', values);
            alert('Form submitted successfully!');
            form.reset();
            setCurrentStep(1);
        }
    };

    return (
        <Form {...form}>
            <form className='contact-multi' onSubmit={form.handleSubmit(onSubmit)}>
                <ul className='flex justify-between mb-4' id='progressbar'>
                    {contactSteps.map((step, index) => (
                        <li key={index} className={`flex-1 text-center p-2 rounded ${index + 1 <= currentStep ? 'active' : ''}`}>
                            {step.icon}
                            <span id={step.label}>{truncater(stepLabels[index], 10)}</span>
                        </li>
                    ))}
                </ul>

                {currentStep === 1 && (
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Name <span className='text-destructive'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter your name' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                {currentStep === 2 && (
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Email <span className='text-destructive'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input type='email' placeholder='Enter your email address' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                {currentStep === 3 && (
                    <FormField
                        control={form.control}
                        name='services'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What can we help you with?</FormLabel>
                                <div className='grid grid-cols-2 gap-4'>
                                    {['Website', 'Wordpress', 'BaaS', 'SEO'].map((service) => (
                                        <label key={service} className='flex items-center gap-2 p-2 border rounded cursor-pointer'>
                                            <Checkbox
                                                onCheckedChange={(isChecked) => {
                                                    const newValue = isChecked
                                                        ? [...field.value, service]
                                                        : field.value.filter((item) => item !== service);
                                                    field.onChange(newValue);
                                                }}
                                                checked={field.value.includes(service)}
                                            />
                                            {service}
                                        </label>
                                    ))}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                {currentStep === 4 && (
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Message <span className='text-destructive'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder='Write your message' className='w-full p-2 border border-gray-300 rounded' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                <div className='flex justify-between mt-4'>
                    {currentStep > 1 && (
                        <Button variant='outline' className='text-[#121923] hover:bg-gray-400 border-[#121923]' onClick={handlePrevious}>
                            Previous
                        </Button>
                    )}
                    {currentStep < contactSteps.length ? <Button onClick={handleNext}>Next</Button> : <Button type='submit'>Submit</Button>}
                </div>
            </form>
        </Form>
    );
};

export default ContactMultiStepForm;
