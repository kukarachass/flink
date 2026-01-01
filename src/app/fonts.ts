import localFont from 'next/font/local'

export const flinkFont = localFont({
    src: [
        {
            path: '../../public/fonts/FlinkRegular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/FlinkMedium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/FlinkBold.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-flink', // создаем CSS-переменную
})