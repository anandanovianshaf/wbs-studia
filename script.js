// Data WBS (Work Breakdown Structure)
let wbsData = [
    { id: "1", parentId: null, taskName: "ANALISIS KEBUTUHAN & PERENCANAAN (Fase 1)", penanggungJawab: "Ananda, Idho, David", deliverable: "Dokumen SKPL (Spesifikasi Kebutuhan Perangkat Lunak)", weekStart: 1, duration: 1, isDone: false },
    { id: "1.1", parentId: "1", taskName: "Finalisasi Ruang Lingkup & Kebutuhan Fungsional (F-01 s/d F-14)", penanggungJawab: "Ananda", deliverable: "Konfirmasi akhir fitur-fitur yang akan dikerjakan.", isDone: false },
    { id: "1.2", parentId: "1", taskName: "Analisis Kebutuhan Non-Fungsional (NF-01 s/d NF-05)", penanggungJawab: "Ananda", deliverable: "Memastikan persyaratan Kinerja, Usability, Kompatibilitas (Browser), dan Keamanan.", isDone: false },
    { id: "1.3", parentId: "1", taskName: "Pembuatan Spesifikasi Kebutuhan Perangkat Lunak (SKPL)", penanggungJawab: "Idho & David", deliverable: "Menghasilkan dokumen resmi yang mengunci scope proyek.", isDone: false },
    { id: "2", parentId: null, taskName: "DESAIN SISTEM & APLIKASI (Fase 2)", penanggungJawab: "Eka, Elsa, Zaki, Andhika", deliverable: "Desain UI/UX Figma & Skema Database MySQL", weekStart: 2, duration: 2, isDone: false },
    { id: "2.1", parentId: "2", taskName: "Desain Arsitektur Sistem (React, MySQL)", penanggungJawab: "Zaki & Andhika", deliverable: "Pemetaan interaksi Front-end dan Back-end.", isDone: false },
    { id: "2.2", parentId: "2", taskName: "Desain Skema Database (ERD/Skema MySQL)", penanggungJawab: "Zaki & Andhika", deliverable: "Membuat tabel untuk User, Jadwal, Sesi Belajar (termasuk kolom Task, Streak, Sumber Belajar).", isDone: false },
    { id: "2.3", parentId: "2", taskName: "Desain Wireframe & User Flow Aplikasi", penanggungJawab: "Eka & Elsa", deliverable: "Perancangan alur pengguna (Login, Buat Jadwal, Mulai Sesi).", isDone: false },
    { id: "2.4", parentId: "2", taskName: "Desain Mockup & Prototipe Interaktif (di Figma)", penanggungJawab: "Eka & Elsa", deliverable: "Mencakup desain untuk fitur F-10 (Stopwatch) dan F-12 (Streak).", isDone: false },
    { id: "2.5", parentId: "2", taskName: "Dokumentasi Desain (Termasuk Style Guide)", penanggungJawab: "Idho & David, Eka, Elsa", deliverable: "Menyusun panduan gaya desain dan aset.", isDone: false },
    { id: "3", parentId: null, taskName: "PROGRAMMING & INTEGRASI (Fase 3)", penanggungJawab: "Zaki, Andhika", deliverable: "Source Code Aplikasi \"Studia\" (Web App)", weekStart: 4, duration: 5, isDone: false },
    { id: "3.1", parentId: "3", taskName: "Setup Lingkungan Proyek (Repo, Koneksi MySQL)", penanggungJawab: "Zaki & Andhika", deliverable: "Memastikan semua tools siap dan koneksi database berjalan.", isDone: false },
    { id: "3.2", parentId: "3", taskName: "Programming Backend (MySQL)", penanggungJawab: "Zaki", deliverable: "Membuat API untuk Otentikasi (F-01) dan CRUD Data (F-02, F-03, F-07).", isDone: false },
    { id: "3.3", parentId: "3", taskName: "Programming Frontend (React) - Fitur Inti", penanggungJawab: "Andhika", deliverable: "Mengembangkan Tampilan Dasar, Dashboard, dan CRUD Jadwal (F-04).", isDone: false },
    { id: "3.4", parentId: "3", taskName: "Programming & Integrasi Fitur Sesi Belajar", penanggungJawab: "Zaki & Andhika", deliverable: "Mengimplementasikan Stopwatch (F-10), Tracking Durasi (F-06, F-07), Pencatatan Task (F-11), dan Sumber Belajar (F-14).", isDone: false },
    { id: "3.5", parentId: "3", taskName: "Programming Fitur Motivasi & Analisis", penanggungJawab: "Zaki & Andhika", deliverable: "Mengimplementasikan Sistem Streak (F-12) dan Visualisasi Statistik/Diagram (F-08).", isDone: false },
    { id: "3.6", parentId: "3", taskName: "Integrasi & Notifikasi", penanggungJawab: "Zaki", deliverable: "Mengembangkan API Notifikasi (F-05) dan Sinkronisasi Google Calendar (F-13).", isDone: false },
    { id: "3.7", parentId: "3", taskName: "Pengembangan Halaman Konten (F-09)", penanggungJawab: "Andhika", deliverable: "Membuat tampilan untuk Halaman Rekomendasi Teknik Belajar.", isDone: false },
    { id: "4", parentId: null, taskName: "TESTING & PERBAIKAN (Fase 4)", penanggungJawab: "Ananda, Zaki, Andhika", deliverable: "Laporan Hasil Testing & Aplikasi Bebas Bug", weekStart: 9, duration: 1.5, isDone: false },
    { id: "4.1", parentId: "4", taskName: "Pengujian Unit (per modul fungsi)", penanggungJawab: "Zaki & Andhika", deliverable: "Memastikan setiap fungsi kode berjalan dengan benar.", isDone: false },
    { id: "4.2", parentId: "4", taskName: "Pengujian Integrasi (antar Front-end & Back-end/MySQL)", penanggungJawab: "Zaki & Andhika", deliverable: "Memastikan data mengalir dengan benar antar komponen.", isDone: false },
    { id: "4.3", parentId: "4", taskName: "Pengujian User Acceptance Testing (UAT)", penanggungJawab: "Ananda", deliverable: "Pengujian oleh tester eksternal/target pengguna untuk memverifikasi usability.", isDone: false },
    { id: "4.4", parentId: "4", taskName: "Perbaikan Bug berdasarkan UAT & Refactoring Kode Final", penanggungJawab: "Zaki & Andhika", deliverable: "Menindaklanjuti semua daftar catatan perbaikan.", isDone: false },
    { id: "5", parentId: null, taskName: "RILIS & DOKUMENTASI AKHIR (Fase 5)", penanggungJawab: "Seluruh Tim", deliverable: "Aplikasi Live & Laporan Final", weekStart: 10.5, duration: 0.5, isDone: false },
    { id: "5.1", parentId: "5", taskName: "Persiapan Deployment (Server Web & Database MySQL)", penanggungJawab: "Zaki & Andhika", deliverable: "Menyiapkan hosting dan mengunggah kode aplikasi.", isDone: false },
    { id: "5.2", parentId: "5", taskName: "Finalisasi Dokumen User Manual", penanggungJawab: "Idho & David", deliverable: "Panduan penggunaan untuk pengguna akhir.", isDone: false },
    { id: "5.3", parentId: "5", taskName: "Finalisasi Laporan Akhir Proyek MPPL", penanggungJawab: "Idho & David", deliverable: "Menyusun semua dokumen teknis dan administratif menjadi laporan akhir.", isDone: false },
];

let ganttChartInstance = null;
let activeFilter = 'All';

const updateMetrics = () => {
    const allTasks = wbsData.filter(item => item.parentId !== null);
    const completedTasks = allTasks.filter(item => item.isDone);
    const progress = allTasks.length > 0 ? ((completedTasks.length / allTasks.length) * 100).toFixed(0) : 0;

    document.getElementById('total-phases').textContent = wbsData.filter(item => item.parentId === null).length;
    document.getElementById('total-tasks').textContent = allTasks.length;
    document.getElementById('project-progress').textContent = `${progress}%`;
};

const toggleTaskDone = (taskId) => {
    const task = wbsData.find(item => item.id === taskId);
    if (task) {
        task.isDone = !task.isDone;
        renderWBS(activeFilter);
        updateMetrics();
        updateGanttChart();
    }
};

const updateGanttChart = () => {
    const mainPhases = wbsData.filter(item => item.parentId === null);
    const ganttLabels = mainPhases.map(phase => `${phase.id}. ${phase.taskName.split('(')[0].trim()}`);
    
    const phaseData = mainPhases.map(phase => {
        const subTasks = wbsData.filter(sub => sub.parentId === phase.id);
        const totalSubTasks = subTasks.length;
        const completedSubTasks = subTasks.filter(sub => sub.isDone).length;
        const completionRatio = totalSubTasks > 0 ? completedSubTasks / totalSubTasks : 0;

        return {
            x: [phase.weekStart - 1, phase.weekStart -1 + phase.duration],
            y: `${phase.id}. ${phase.taskName}`,
            isComplete: completionRatio === 1,
            completionRatio: completionRatio,
        };
    });
    
    const backgroundColors = phaseData.map(d => 
        d.isComplete ? 'rgba(22, 163, 74, 0.7)' : 'rgba(56, 189, 248, 0.6)'
    );
    const borderColors = phaseData.map(d => 
        d.isComplete ? 'rgba(22, 163, 74, 1)' : 'rgba(2, 132, 199, 1)'
    );

    if (ganttChartInstance) {
        ganttChartInstance.data.datasets[0].data = phaseData.map(d => d.x);
        ganttChartInstance.data.datasets[0].backgroundColor = backgroundColors;
        ganttChartInstance.data.datasets[0].borderColor = borderColors;
        ganttChartInstance.update();
    } else {
        const ctx = document.getElementById('ganttChart').getContext('2d');
        ganttChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ganttLabels,
                datasets: [{
                    label: 'Durasi Fase (Minggu)',
                    data: phaseData.map(d => d.x),
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                    borderSkipped: false,
                    borderRadius: 4,
                    barPercentage: 0.5,
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 11,
                        title: { display: true, text: 'Minggu ke-' },
                        grid: { color: '#e2e8f0' }
                    },
                    y: {
                        grid: { display: false },
                        ticks: {
                            autoSkip: false,
                            callback: function(value) {
                                const label = this.getLabelForValue(value);
                                return label.length > 25 ? label.substring(0, 25) + '...' : label;
                            }
                        }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const raw = context.raw;
                                const start = raw[0] + 1;
                                const end = raw[1];
                                const duration = end - raw[0];
                                return `Minggu ${start} hingga ${end.toFixed(1)} (${duration.toFixed(1)} minggu)`;
                            }
                        }
                    }
                }
            }
        });
    }
};

const renderWBS = (filter = 'All') => {
    const wbsContainer = document.getElementById('wbs-container');
    const expandedPhases = Array.from(document.querySelectorAll('.task-card.expanded'))
        .map(card => card.dataset.phaseId);

    wbsContainer.innerHTML = '';
    const mainPhases = wbsData.filter(item => item.parentId === null);

    mainPhases.forEach(phase => {
        const subTasks = wbsData.filter(sub => sub.parentId === phase.id);
        
        let filteredSubTasks = (filter === 'All') 
            ? subTasks 
            : subTasks.filter(st => st.penanggungJawab.includes(filter));
        
        const isPhaseVisible = (filter === 'All') || phase.penanggungJawab.includes(filter) || filteredSubTasks.length > 0;
        if(!isPhaseVisible) return;
        
        const totalSubTasks = subTasks.length;
        const completedSubTasks = subTasks.filter(sub => sub.isDone).length;
        const phaseCompletion = totalSubTasks > 0 ? (completedSubTasks / totalSubTasks) : 0;
        const phaseStatusClass = phaseCompletion === 1 ? 'bg-green-100 border-green-400' : 'bg-white border-slate-200';
        const phaseTextColor = phaseCompletion === 1 ? 'text-green-700' : 'text-slate-800';
        const isExpanded = expandedPhases.includes(phase.id) ? 'expanded' : '';

        const phaseElement = document.createElement('div');
        phaseElement.className = `task-card rounded-xl shadow-sm border ${phaseStatusClass} ${isExpanded}`;
        phaseElement.dataset.phaseId = phase.id;
        phaseElement.innerHTML = `
            <div class="p-4 md:p-5 flex justify-between items-center cursor-pointer phase-header">
                <div class="flex items-start gap-4">
                    <span class="text-sky-600 font-bold text-lg mt-1">${phase.id}.</span>
                    <div>
                        <h3 class="font-bold ${phaseTextColor} text-base md:text-lg">${phase.taskName}</h3>
                        <p class="text-xs text-slate-500 mt-1">Penanggung Jawab: ${phase.penanggungJawab}</p>
                        <div class="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                            <div class="bg-green-500 h-1.5 rounded-full" style="width: ${phaseCompletion * 100}%"></div>
                        </div>
                        <p class="text-xs text-slate-500 mt-1">${(phaseCompletion * 100).toFixed(0)}% Selesai</p>
                    </div>
                </div>
                <svg class="chevron w-6 h-6 text-slate-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <div class="sub-tasks-container px-4 md:px-5 pb-4">
                <div class="pl-4 ml-4 border-l-2 border-sky-200 space-y-3">
                    ${filteredSubTasks.map(sub => {
                        const doneClass = sub.isDone ? 'task-done' : 'text-slate-700';
                        const checkIcon = sub.isDone ? '✅' : '⬜';
                        return `
                            <div class="sub-task py-2 flex items-center justify-between">
                                <div class="flex-1 mr-4">
                                    <p class="font-semibold ${doneClass}">${sub.id} - ${sub.taskName}</p>
                                    <p class="text-sm text-slate-500">Penanggung Jawab: ${sub.penanggungJawab}</p>
                                    <p class="text-xs text-slate-500 mt-1 italic">Deliverable: ${sub.deliverable}</p>
                                </div>
                                <button class="mark-done-btn text-xl p-1 rounded hover:bg-slate-100" data-id="${sub.id}">${checkIcon}</button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        wbsContainer.appendChild(phaseElement);
    });

    // Re-attach event listeners
    document.querySelectorAll('.phase-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('expanded');
        });
    });

    document.querySelectorAll('.mark-done-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const taskId = e.currentTarget.dataset.id;
            toggleTaskDone(taskId);
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const filterButtonsContainer = document.getElementById('filter-buttons');
    let uniquePersons = new Set();
    
    wbsData.forEach(item => {
        const persons = item.penanggungJawab.split(/, | & /);
        persons.forEach(p => uniquePersons.add(p.trim()));
    });

    const sortedPersons = ['All', ...Array.from(uniquePersons).sort()];
    filterButtonsContainer.innerHTML = sortedPersons.map(person => 
        `<button data-person="${person}" class="filter-btn px-4 py-2 text-sm font-medium rounded-lg transition ${person === 'All' ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'}">${person}</button>`
    ).join('');

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeFilter = btn.dataset.person;
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('bg-sky-600', 'text-white');
                b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-300', 'hover:bg-slate-100');
            });
            btn.classList.add('bg-sky-600', 'text-white');
            btn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-300', 'hover:bg-slate-100');
            renderWBS(activeFilter);
        });
    });
    
    renderWBS();
    updateMetrics();
    updateGanttChart();
});