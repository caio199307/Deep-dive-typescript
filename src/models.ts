export enum accessOptions {
    administrator = 'administrador',
    manager = 'gerente',
    employee = 'funcionário',
    undefined = 'não definido'
}

export type userType = {
    fullName: string,
    register?: string | number,
    access?: accessOptions,
    active?: boolean
}