'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { UserFormValidation } from '@/lib/validation';
import { useState } from 'react';
import CustomFormField from '../CustomFormField';
import SubmitButton from '../SubmitButton';



export enum FormFieldType {
    INPUT = 'input',
    PASSWORD = 'password',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
    SELECT = 'select',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    DATE_PICKER = 'datePicker',
    SKELETON = 'skeleton',
}

export function PatientForm() {

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    function onSubmit(values: z.infer<typeof UserFormValidation>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col items-start justify-center gap-6 flex-1 w-full"
            >
                <section className="flex flex-col items-start justify-start w-full">
                    <h1 className="header">Hi there 👋🏻</h1>
                    <p className="text-dark-700">Schedule an appointment</p>
                </section>
                <div className="flex flex-col items-start justify-start gap-4 w-full">
                    <CustomFormField
                        control={form.control}
                        name="Username"
                        fieldType={FormFieldType.INPUT}
                        label="Full Name"
                        placeholder="Enter your full name"
                        iconSrc="/assets/icons/user.svg"
                        iconAlt="user"
                    />
                    <CustomFormField
                        control={form.control}
                        name="Username"
                        fieldType={FormFieldType.INPUT}
                        label="Email Address"
                        placeholder="Enter your email address"
                        iconSrc="/assets/icons/email.svg"
                        iconAlt="email"
                    />
                    <CustomFormField
                        control={form.control}
                        name="Phone Number"
                        fieldType={FormFieldType.PHONE_INPUT}
                        label="Phone Number"
                        placeholder="Enter your full name"
                        iconSrc="/assets/icons/phone.svg"
                        iconAlt="passport"
                    />
                </div>
                <SubmitButton isLoading={isLoading} >
                    Get Started
                </SubmitButton>
            </form>
        </Form>
    );
}
