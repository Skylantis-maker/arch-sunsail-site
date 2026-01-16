import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
  { name: '2020', investment: 2.4, efficiency: 85 },
  { name: '2021', investment: 3.5, efficiency: 88 },
  { name: '2022', investment: 5.0, efficiency: 92 },
  { name: '2023', investment: 7.2, efficiency: 94 },
  { name: '2024', investment: 10.5, efficiency: 96 },
];

export default function RD() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">R&D & Innovation</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ARCH is committed to pushing the boundaries of energy storage efficiency. Our research plans directly support government grant applications and community sustainability goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Efficiency Growth & Investment</h3>
                <p className="text-gray-600 mb-6">
                    Our continuous investment in R&D has led to significant breakthroughs in battery round-trip efficiency and thermal management systems.
                </p>
                <div className="h-80 w-full bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="name" stroke="#64748b" />
                            <YAxis yAxisId="left" stroke="#0d9488" label={{ value: 'Investment ($M)', angle: -90, position: 'insideLeft' }} />
                            <YAxis yAxisId="right" orientation="right" stroke="#eab308" label={{ value: 'Efficiency (%)', angle: 90, position: 'insideRight' }} />
                            <Tooltip />
                            <Legend />
                            <Line yAxisId="left" type="monotone" dataKey="investment" stroke="#0d9488" strokeWidth={3} activeDot={{ r: 8 }} name="R&D Investment ($M)" />
                            <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#eab308" strokeWidth={3} name="Sys Efficiency (%)" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
            <div className="space-y-6">
                <div className="bg-white border-l-4 border-primary-500 p-6 shadow-md rounded-r-lg">
                    <h4 className="text-lg font-bold text-slate-900">Current Research Focus</h4>
                    <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
                        <li>Solid-state battery integration for extreme climates.</li>
                        <li>AI-driven EMS (Energy Management Systems) for spot-market arbitrage.</li>
                        <li>Recyclable battery casing materials.</li>
                    </ul>
                </div>
                 <div className="bg-white border-l-4 border-secondary-500 p-6 shadow-md rounded-r-lg">
                    <h4 className="text-lg font-bold text-slate-900">Grant Outcomes</h4>
                    <p className="mt-2 text-sm text-slate-600">
                        Successfully secured federal funding for the "Regional Microgrid Stability" project, demonstrating a 30% reduction in local outages using our <strong>Yileen Distributed Solutions</strong>.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}