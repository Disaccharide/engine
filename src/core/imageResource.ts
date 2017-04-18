let imageJason = [
    { id: "ACCEPTABLE.png", width: 100, height: 100 },
    { id: "buttonAccept.png", width: 100, height: 100 },
    { id: "buttonFinish.png", width: 100, height: 100 },
    { id: "CAN_SUBMIT.png", width: 100, height: 100 },
    { id: "close.png", width: 100, height: 100 },
    
    { id: "dialog.png", width: 100, height: 100 },
    { id: "DURING.png", width: 100, height: 100 },
    { id: "f1.png", width: 100, height: 100 },
    { id: "f2.png", width: 100, height: 100 },
    { id: "f3.png", width: 100, height: 100 },
    { id: "f4.png", width: 100, height: 100 },
    { id: "heroButton.png", width: 100, height: 100 },
    { id: "heroDetails.jpg", width: 100, height: 100 },

    { id: "stand_01.png", width: 100, height: 100 },
    { id: "stand_02.png", width: 100, height: 100 },
    { id: "stand_03.png", width: 100, height: 100 },
    { id: "stand_04.png", width: 100, height: 100 },
    { id: "stand_05.png", width: 100, height: 100 },
    { id: "stand_06.png", width: 100, height: 100 },
    { id: "stand_07.png", width: 100, height: 100 },
    { id: "stand_08.png", width: 100, height: 100 },
    { id: "stand_09.png", width: 100, height: 100 },
    { id: "stand_10.png", width: 100, height: 100 },

    { id: "run_01.png", width: 100, height: 100 },
    { id: "run_02.png", width: 100, height: 100 },
    { id: "run_03.png", width: 100, height: 100 },
    { id: "run_04.png", width: 100, height: 100 },
    { id: "run_05.png", width: 100, height: 100 },
    { id: "run_06.png", width: 100, height: 100 },
    { id: "run_07.png", width: 100, height: 100 },
    { id: "run_08.png", width: 100, height: 100 },

    { id: "mask.png", width: 100, height: 100 },
    { id: "tree.png", width: 100, height: 100 },
    { id: "01_01.png", width: 100, height: 100 },
    { id: "02_01.png", width: 100, height: 100 },
    
    { id: "pig.png", width: 100, height: 100 },
    { id: "taskButton.png", width: 100, height: 100 },
    { id: "taskPanel.jpg", width: 100, height: 100 },
    { id: "w1.jpg", width: 100, height: 100 },
    { id: "w2.jpg", width: 100, height: 100 },
    { id: "w3.jpg", width: 100, height: 100 },
    { id: "w4.jpg", width: 100, height: 100 },
    
    { id: "map01.png", width: 100, height: 100 },
    { id: "map02.png", width: 100, height: 100 }
];
namespace engine {
    export class ImageResource {
        bitmapData: HTMLImageElement;
        id: string;
        width: number;
        height: number;
        constructor(id: string, width: number, height: number) {
            this.id = id;
            this.width = width;
            this.height = height;
        }
    }
    export class Resourse {
        resourses: ImageResource[];
        private static Res: Resourse;
        constructor() {
            ;
        }
        public static getInstance(): Resourse {
            if (Resourse.Res == null) {
                Resourse.Res = new Resourse();
                Resourse.Res.resourses = new Array();
                return Resourse.Res;
            } else {
                return Resourse.Res;
            }
        }
        getRes(id: string): ImageResource {
            if (id.match("null")) {
                console.log("not find " + id + " in imageJason");//此处可替换为“若没有该id，则添加至resource数组”
                return null;
            }
            for (let i = 0; i < this.resourses.length; i++) {
                if (this.resourses[i].id.match(id)) {
                    return this.resourses[i];
                }
            }


        }
        initial() {
            imageJason.forEach((x) => {
                var y = new ImageResource(x.id, x.width, x.height);
                this.resourses.push(y);
            })
        }
    }
}