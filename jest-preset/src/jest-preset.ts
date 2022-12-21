import { YouwolJestPresetGlobals } from './types'

const youwolJestPresetGlobals: YouwolJestPresetGlobals = {
    debug: false,
    isCI: false,
    isGitHubActions: false,
    integrationUrl: '',
}
const reporters = ['default', 'jest-junit']

let debug: (msg: string, ...obj: unknown[]) => void = () => {
    /* Do nothing but do it well */
}

const youwolJestPresetDebug = process.env['YOUWOL_JEST_PRESET_DEBUG']
const githubActions = process.env['GITHUB_ACTIONS']
const continuousIntegration = process.env['CI']
const url_port = process.env['INTEGRATION_PY_YOUWOL_PORT'] ?? '2001'
const url_host = process.env['INTEGRATION_PY_YOUWOL_HOST'] ?? 'localhost'
const url_scheme = process.env['INTEGRATION_PY_YOUWOL_SECURE']
    ? 'https'
    : 'http'

if (youwolJestPresetDebug) {
    youwolJestPresetGlobals.debug = true
    debug = (msg, obj) => {
        if (obj !== undefined) {
            console.log(msg, obj)
        } else {
            console.log(msg)
        }
    }
    debug(`Youwol Jest preset debug is active`)
}

youwolJestPresetGlobals.integrationUrl = `${url_scheme}://${url_host}:${url_port}`
debug(`Integration URL : ${youwolJestPresetGlobals.integrationUrl}`)

if (githubActions) {
    youwolJestPresetGlobals.isGitHubActions = true
    reporters.push('github-actions')
    debug(`Github Actions detected`)
}

if (continuousIntegration) {
    youwolJestPresetGlobals.isCI = true
    debug(`Continuous Integration detected`)
}

debug('youwol Jest Preset Globals =', youwolJestPresetGlobals)

const jestPreset = {
    transform: { '^.+\\.tsx?$': ['ts-jest', {}] },
    testRunner: 'jest-circus',
    testEnvironment: 'jsdom',
    reporters,
    modulePathIgnorePatterns: ['/dist', '/yw_config', '.template'],
    testEnvironmentOptions: { url: youwolJestPresetGlobals.integrationUrl },
    coverageProvider: 'v8',
    collectCoverageFrom: ['./src/lib/**/*.ts', './src/app/**/*.ts'],
    globals: {
        youwolJestPresetGlobals,
    },
}

debug('final jest preset =', jestPreset)

export default jestPreset
