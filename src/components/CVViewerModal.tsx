import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ExternalLink, ShieldCheck, GraduationCap, Award, Briefcase, Code, Check } from 'lucide-react';
import { PERSONAL_DATA, EDUCATIONS, ACHIEVEMENTS, PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface CVViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVViewerModal: React.FC<CVViewerModalProps> = ({ isOpen, onClose }) => {
  const [activeCv, setActiveCv] = useState<'primary' | 'secondary'>('primary');
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const currentUrl = activeCv === 'primary' 
    ? PERSONAL_DATA.cvPrimaryUrl 
    : PERSONAL_DATA.cvSecondaryUrl;

  const currentName = activeCv === 'primary' 
    ? 'Estiak_Bin_Tanvir_CV.pdf' 
    : 'Estiak_CV_Resume.pdf';

  const handleDownload = async (targetUrl?: string, targetName?: string) => {
    const url = targetUrl || currentUrl;
    const name = targetName || currentName;

    setDownloading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.warn('Blob download failed, attempting fallback direct link:', error);
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                Curriculum Vitae & Resume
              </h3>
              <p className="text-xs text-slate-500 font-mono">{PERSONAL_DATA.name} · UIU CSE Graduate</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Version Switcher */}
            <div className="inline-flex items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveCv('primary')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeCv === 'primary'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Official CV
              </button>
              <button
                onClick={() => setActiveCv('secondary')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeCv === 'secondary'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Detailed Resume
              </button>
            </div>

            {/* Direct Download Button */}
            <button
              onClick={() => handleDownload()}
              disabled={downloading}
              className="px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-lg shadow-sm transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300 dark:text-slate-950" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body (Split into PDF viewer & Document View) */}
        <div className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-950 p-4 sm:p-6 space-y-6">
          
          {/* Action Download Banner */}
          <div className="p-4 rounded-xl bg-cyan-950/20 dark:bg-cyan-950/40 border border-cyan-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">{currentName}</span> (Official Document file)
                <p className="text-slate-400 text-[11px]">B.Sc. in Computer Science & Engineering (CGPA 3.69/4.00)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownload(PERSONAL_DATA.cvPrimaryUrl, 'Estiak_Bin_Tanvir_CV.pdf')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download CV 1</span>
              </button>

              <button
                onClick={() => handleDownload(PERSONAL_DATA.cvSecondaryUrl, 'Estiak_CV_Resume.pdf')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download CV 2</span>
              </button>
            </div>
          </div>

          {/* PDF Object Frame with Fallback Document Container */}
          <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md space-y-8">
            
            {/* Embedded object */}
            <div className="h-[480px] w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <object
                data={currentUrl}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <FileText className="w-12 h-12 text-cyan-500" />
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Direct PDF Preview
                  </p>
                  <p className="text-xs text-slate-500 max-w-sm">
                    Click below to open or download the PDF document directly.
                  </p>
                  <a
                    href={currentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-white bg-cyan-600 rounded-lg"
                  >
                    Open PDF Document
                  </a>
                </div>
              </object>
            </div>

            {/* Document Readable Copy Below */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                  Resume Executive Summary
                </h4>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">UIU Graduate 2026</span>
              </div>

              {/* Bio summary */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {PERSONAL_DATA.summary}
              </p>

              {/* Education */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-500" />
                  Education
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EDUCATIONS.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
                      <p className="font-bold text-slate-900 dark:text-white">{edu.degree}</p>
                      <p className="text-slate-500 text-[11px]">{edu.institution}</p>
                      <p className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">{edu.grade}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  Awards & Honors
                </h5>
                <div className="space-y-1.5 text-xs">
                  {ACHIEVEMENTS.map((a, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                      <span className="font-medium text-slate-800 dark:text-slate-200">{a.title}</span>
                      <span className="font-mono text-slate-500">{a.term}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono shrink-0">
          <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified Document Assets</span>
          </span>

          <button
            onClick={() => handleDownload()}
            className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
          >
            Click to Download PDF
          </button>
        </div>

      </div>
    </div>
  );
};
