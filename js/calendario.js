/**
 * yokohamacalcio - Gestione Calendario
 * Utilizza FullCalendar (v5) + funzioni custom
 */

document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 1. INIZIALIZZA CALENDARIO
    // ======================
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;

    const calendar = new FullCalendar.Calendar(calendarEl, {
        // Configurazione base
        initialView: 'dayGridMonth',
        locale: 'ja',
        timeZone: 'Asia/Tokyo',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listMonth'
        },

        // Stile personalizzato
        themeSystem: 'bootstrap5',
        eventColor: '#e74c3c',
        eventTextColor: '#fff',

        // Dati delle partite (puoi sostituire con un JSON esterno)
        events: [
            {
                title: 'vs Kawasaki FC',
                start: getNextSaturday(),
                extendedProps: {
                    location: '横浜市中央公園サッカー場',
                    type: 'アマチュアリーグ',
                    team: 'Kawasaki FC'
                }
            },
            // Aggiungi altre partite...
        ],

        // Formato personalizzato eventi
        eventContent: function(arg) {
            return {
                html: `
                    <div class="fc-event-main">
                        <strong>${arg.timeText}</strong>
                        <div>${arg.event.title}</div>
                        <small>${arg.event.extendedProps.location}</small>
                    </div>
                `
            };
        },

        // Click su evento
        eventClick: function(info) {
            showMatchDetails(info.event);
        }
    });

    calendar.render();

    // ======================
    // 2. FUNZIONI DI SUPPORTO
    // ======================
    
    // Prossimo sabato alle 14:00
    function getNextSaturday() {
        const date = new Date();
        const daysUntilSaturday = (6 - date.getDay() + 7) % 7 || 7;
        date.setDate(date.getDate() + daysUntilSaturday);
        date.setHours(14, 0, 0, 0);
        return date;
    }

    // Mostra dettagli partita
    function showMatchDetails(event) {
        const details = `
            <div class="match-detail">
                <h3>${event.title}</h3>
                <p><strong>日時:</strong> ${formatDate(event.start)}</p>
                <p><strong>場所:</strong> ${event.extendedProps.location}</p>
                <p><strong>種類:</strong> ${event.extendedProps.type}</p>
                <button onclick="location.href='./squadra.html'">チーム詳細</button>
            </div>
        `;
        
        // Usa SweetAlert2 per un popup elegante
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                html: details,
                background: '#fff',
                confirmButtonColor: '#e74c3c'
            });
        } else {
            alert(`${event.title}\n${formatDate(event.start)}`);
        }
    }

    // Formattazione data in giapponese
    function formatDate(date) {
        return new Date(date).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // ======================
    // 3. FILTRI PERSONALIZZATI
    // ======================
    document.querySelectorAll('.match-filter').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Filtra gli eventi
            calendar.getEvents().forEach(event => {
                event.setProp(
                    'display',
                    filter === 'all' || event.extendedProps.type === filter ? 'auto' : 'none'
                );
            });
            
            // Aggiorna la vista
            calendar.updateSize();
        });
    });
});
