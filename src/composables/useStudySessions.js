import { ref, watch, onMounted } from 'vue'

export function useStudySessions() {
    const studysessions = ref([])

    // Load from Local Storage on mount
    onMounted(() => {
        const savedRecords = localStorage.getItem('studysessions')
        if (savedRecords) {
            studysessions.value = JSON.parse(savedRecords)
        }
    })

    // Watch state changes and save to Local Storage automatically
    watch(
        studysessions,
        (newValue) => {
            localStorage.setItem('studysessions', JSON.stringify(newValue))
        }, { deep: true }
    )

    function addStudysession(session) {
        studysessions.value.push(session)
    }

    function removeStudysession(id) {
        studysessions.value = studysessions.value.filter(
            record => record.id !== id
        )
    }

    function toggleStatus(id) {
        const session = studysessions.value.find(record => record.id === id)
        if (session) {
            session.completed = !session.completed
        }
    }

    // Reusable formatting logic (Part VI requirement)
    function formatDate(dateString) {
        if (!dateString) return ''
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return {
        studysessions,
        addStudysession,
        removeStudysession,
        toggleStatus,
        formatDate
    }
}