import path from 'path';

const config = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, 'src/app'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@code': path.resolve(__dirname, 'src/constants/code'),
            '@form-validation': path.resolve(__dirname, 'src/form-validation'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@interfaces': path.resolve(__dirname, 'src/types/interfaces'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
};

export default config;
