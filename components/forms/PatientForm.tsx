'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomFormField from '../CustomFormField';

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
});

export function PatientForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col items-start justify-center gap-6 flex-1 w-full"
            >
                <section className="flex flex-col items-start justify-start">
                    <h1 className="header">Hi there 👋🏻</h1>
                    <p className="text-dark-700">Schedule an appointment</p>
                </section>
                <CustomFormField control={form.control} name="Username" />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
