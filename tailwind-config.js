// Konfigurasi Tailwind CSS (harus dimuat tepat setelah script CDN Tailwind)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                maroon: {
                    50: '#FDF2F2',
                    100: '#FDE8E8',
                    200: '#F8B4B4',
                    600: '#9B1C1C',
                    700: '#8B1111',
                    800: '#700B0B',
                    900: '#4A0808',
                },
                mustard: {
                    300: '#FFE066',
                    400: '#FFD13B',
                    500: '#FFB800',
                    600: '#E09D00',
                    700: '#B88200'
                },
                cream: '#FFFBEB',
                charcoal: '#18181B'
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                bebas: ['Bebas Neue', 'sans-serif'],
                marker: ['Permanent Marker', 'cursive'],
                caveat: ['Caveat', 'cursive']
            }
        }
    }
};
