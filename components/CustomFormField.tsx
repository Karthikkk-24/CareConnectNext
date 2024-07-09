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
import { E164Number } from 'libphonenumber-js/core';
import Image from 'next/image';
import React from 'react';
import { Control } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FormFieldType } from './forms/PatientForm';

interface CustomProps {
    control: Control<any>;
    name: string;
    fieldType: FormFieldType;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
    const { fieldType, iconSrc, iconAlt, placeholder } = props;
    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex w-full rounded-md border border-dark-500 bg-dark-400">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            alt={iconAlt || 'icon'}
                            width={24}
                            height={24}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            type="text"
                            placeholder={placeholder}
                            {...field}
                            className="border-0 w-full"
                        />
                    </FormControl>
                </div>
            );
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className="input-phone"
                        defaultCountry="IN"
                    />
                </FormControl>
            );
        default:
            return <></>;
    }
};

export default function CustomFormField(props: CustomProps) {
    const { control, name, fieldType, label, placeholder, iconSrc, iconAlt } =
        props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1 w-full">
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}

                    <RenderField field={field} props={props} />

                    <FormMessage className="shad-error" />
                </FormItem>
            )}
        />
    );
}
