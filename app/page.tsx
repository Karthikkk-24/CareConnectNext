
import { PatientForm } from '@/components/forms/PatientForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <section className="h-full w-1/2 flex flex-col items-start justify-between p-10">
                <Image
                    src={'/assets/icons/logo-full.svg'}
                    alt="patient"
                    width={1000}
                    height={1000}
                    className="h-10 w-fit"
                />
                <PatientForm />
                <div className="text-14-regular flex items-center justify-between w-full">
                    <p className="justify-items-end text-dark-600 xl:text-left">
                        &copy; 2024 All Rights Reserved CareConnectNext
                    </p>
                    <Link href="/?admin=true" className="text-green-500">
                        Admin Login
                    </Link>
                </div>
            </section>
            <div className="h-full w-1/2 flex items-center justify-center flex-col">
                <Image
                    src={'/assets/images/onboarding-img.png'}
                    alt="patient"
                    width={1000}
                    height={1000}
                    className="side-img max-w-1/2"
                />
            </div>
        </div>
    );
}
