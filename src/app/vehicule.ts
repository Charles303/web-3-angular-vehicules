export interface Vehicule {
    _id?: string,
    nom: string,
    constructeur: string,
    origine: string,
    type: string[],
    prix: number,
    chevaux: number,
    torque: number,
    date_production: Date,
    accidente: boolean,
    financement: boolean,
    liste_traitement?: [
        {
            nom_traitement: string,
            prix: number
        }
    ],
    liste_proprietaire?: [
        {
            prenom: string,
            nom: string,
            telephone: string
        }
    ]
}