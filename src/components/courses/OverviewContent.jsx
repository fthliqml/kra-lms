"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

export default function OverviewContent() {
  const router = useRouter();
  const { isOpen } = useSidebar();

  return (
    <div
      className={cn(
        "flex-1 pt-10 pb-5 transition-all duration-500 ease-in-out",
        isOpen ? "md:pl-72" : "md:pl-36"
      )}
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-sm text-muted-foreground">Web Development</p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Master JavaScript From Beginner to Advanced
          </h1>

          <div className="border-2 border-primary rounded-xl overflow-hidden shadow-all">
            <Image
              src="/images/js.jpg"
              alt="JavaScript course"
              width={1200}
              height={600}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What you'll learn */}
          <div className="bg-white shadow-all rounded-xl p-6 space-y-3">
            <h2 className="font-bold text-lg">What you'll learn</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dalam kursus ini, Anda akan mempelajari JavaScript dari dasar
              hingga lanjutan, mulai dari variabel, tipe data, dan operator,
              hingga kontrol alur, fungsi, dan array. Anda juga akan memahami
              konsep modern seperti arrow function, modul ES6, serta pemrograman
              asinkron menggunakan promise dan async/await. Materi mencakup
              manipulasi DOM, penanganan event, dan pengembangan logika
              interaktif untuk aplikasi web. Kursus ini dirancang untuk
              membekali Anda dengan keterampilan JavaScript yang aplikatif, baik
              di sisi klien maupun server, serta siap digunakan dalam proyek
              nyata dan proses rekrutmen.
            </p>
          </div>

          {/* Course Content */}
          <div className="bg-white shadow-all rounded-xl p-6 space-y-4">
            <h2 className="font-bold text-lg">Course Content</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>1. Pretest</li>
              <li>2. Learning Module</li>
              <li>3. Posttest</li>
              <li>4. Result</li>
            </ul>
            <Button
              className="w-full mt-4 rounded-full"
              onClick={() => router.replace("/courses/1/pre-test")}
              variant={"primary"}
            >
              Start Course <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
