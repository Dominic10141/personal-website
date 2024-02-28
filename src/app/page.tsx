import { Button } from '@/components/Button';
import Image from 'next/image';
import avatarImage from "@/images/avatar.png";
import { IconDownload } from "@tabler/icons-react";
import Link from 'next/link';
import heroImage from "@/images/hero-image.jpg";
export default function HomePage() {
  return <>
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-9">
      <div>
      <div>
  {/*  We use the Image component to load the avatar image */}
  <Image
    src={avatarImage}
    alt="John Doe's avatar"
    // We also give it a rounded border and a background color
    className="h-16 w-16 mt-6 rounded-full bg-zinc-100 object-cover"
    priority
  />

  <h1 className="text-4xl sm:text-5xl mt-6 font-bold tracking-tight text-zinc-800">
    bachlar from SYSU, Master from HK PolyU, and AI hobbyist.
  </h1>

  <p className="mt-6 text-base text-zinc-600 font-light">
    I'm Dominic, a student and tech enthusiast based in Hong Kong.
    I'm the lead developer at TechNova, where we create innovative solutions
    that leverage AI and machine learning to solve real-world problems.
  </p>
</div>
<div className="mt-6">
  <Link href="/resume_LiuZhendong.pdf">
    
    <Button>Download CV (English version)<IconDownload className="h-4 w-4" /></Button>
    
  </Link>
</div>
<div className="mt-6">
  <Link href="/简历2.0.pdf">
    
    <Button>Download CV (Chinese version)<IconDownload className="h-4 w-4" /></Button>
    
  </Link>
</div>
      </div>
      <div>
      <div className="max-w-sm lg:max-w-none m-auto">
  <Image className="rounded-lg" src={heroImage} alt="Hero image" priority />
</div>
<section className="mt-24">
  {/*  We use the h2 tag to create a section heading */}
  {/*  We also use the text-2xl class to make the heading large */}
  {/*  We use the font-bold class to make the heading bold */}
  <h2 className="text-2xl font-bold text-zinc-800">My Projects</h2>

  {/*  We use the p tag to create a section description */}
  {/*  We also use the text-base class to make the description large */}
  {/*  We use the font-light class to make the description light */}
  <p className="text-zinc-600 font-light">
    这一块是一个实验
  </p>

  <div className="mt-7">
    <Link href="/projects">
      <Button>View All Projects</Button>
    </Link>
  </div>
</section>
      </div>
    </section>
    
  </>;
}
