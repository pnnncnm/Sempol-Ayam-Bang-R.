// Konfigurasi Tailwind CSS (harus dimuat tepat setelah script CDN Tailwind)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#DC2626',
                    darkred: '#991B1B',
                    amber: '#D97706',
                    yellow: '#F59E0B',
                    cream: '#FFFBEB',
                    dark: '#18181B'
                }
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            }
        }
    }
};
