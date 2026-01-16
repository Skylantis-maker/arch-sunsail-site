import React from 'react';
import { useGlobal } from '../context/GlobalContext';

const TeamNode = ({ title, role, sub }: { title: string, role?: string, sub?: boolean }) => (
  <div className={`flex flex-col items-center ${sub ? 'mt-8' : ''}`}>
    <div className={`bg-white border-2 ${role === 'DIRECTOR' ? 'border-primary-600' : 'border-slate-200'} p-4 rounded-lg shadow-sm text-center min-w-[150px]`}>
      <div className="font-bold text-slate-800">{title}</div>
      {role && <div className="text-xs text-primary-600 font-semibold mt-1">{role}</div>}
    </div>
    {!sub && <div className="h-8 w-px bg-slate-300"></div>}
  </div>
);

export default function About() {
  const { lang } = useGlobal();

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-6 text-center">About ARCH Group</h1>
        <p className="text-lg text-gray-600 text-center mb-16 leading-relaxed">
           ARCH is the union development organization within <strong>WELTRUS</strong>, <strong>HUOWA</strong>, and <strong>SUNSAIL FREIGHT</strong>. 
           We leverage collective expertise to deliver cutting-edge renewable energy solutions and logistics.
        </p>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Our Vision</h3>
            <p className="text-slate-700">To be the global leader in integrated BESS solutions, making renewable energy accessible, reliable, and profitable for all.</p>
          </div>
          <div className="bg-secondary-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Our Mission</h3>
            <p className="text-slate-700">Accelerating the transition to zero-carbon energy through innovative technology, strategic partnerships, and community-focused development.</p>
          </div>
        </div>

        {/* Organizational Chart */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-10">Our Team Structure</h2>
            <div className="flex flex-col items-center">
                {/* Level 1 */}
                <TeamNode title="Executive Board" role="DIRECTOR" />
                
                {/* Connector */}
                <div className="w-[80%] h-px bg-slate-300 mb-8 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 w-px bg-slate-300"></div>
                    <div className="absolute top-0 left-0 h-4 w-px bg-slate-300"></div>
                    <div className="absolute top-0 right-0 h-4 w-px bg-slate-300"></div>
                    <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-300"></div>
                </div>

                {/* Level 2 */}
                <div className="flex justify-between w-[90%] md:w-[80%] gap-4">
                    <TeamNode title="R&D Team" role="Research & Design" sub />
                    <TeamNode title="Tech Ops" role="Technical Support" sub />
                    <TeamNode title="Commercial" role="Sales & Marketing" sub />
                </div>
            </div>
        </div>

        {/* Partners */}
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Ecosystem Partners</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {['WELTRUS', 'HUOWA', 'SUNSAIL FREIGHT', 'Hyxi', 'SUNGROW', 'Green Gold Energy'].map(p => (
                    <span key={p} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-medium shadow-sm">
                        {p}
                    </span>
                ))}
            </div>
            <p className="mt-8 text-sm text-gray-500">
                We also collaborate with local councils, government grant bodies, and community groups to ensure project success.
            </p>
        </div>
      </div>
    </div>
  );
}