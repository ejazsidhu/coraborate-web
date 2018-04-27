export interface IClassesViews {
    OwnClassess: OwnClassess [];
    JoinClassess: JoinClassess [];
}
export interface OwnClassess {
    OwnClassId: number;
    OwnClassName: string;
    Description: string;
    OwnClassCode: string;
    ImagePath: string;
    Active: boolean;
}
export interface JoinClassess {

    JoinClassId: number;
    JoinClassName: string;
    Description: string;
    JoinClassCode: string;
    ImagePath: string;
    Active: boolean;
}
