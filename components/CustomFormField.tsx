'use client';

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Control } from 'react-hook-form';

interface CustomProps {
    control: Control<any>;
    name: string;
}

export default function CustomFormField({ control, name }: CustomProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        <span className="text-sm font-medium">
                            {name}
                        </span>
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
