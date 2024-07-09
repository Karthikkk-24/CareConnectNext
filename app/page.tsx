import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="h-screen flex max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className='sub-container max-w-[496px]'>
                    <Image src={'/assets/images/logo/logo.png'} alt="logo" width={200} height={200} />
                </div>
            </section>
        </div>
    );
}
