class human {
    constructor (clotches, hair){
        this.clothes = clothes
        this.hair = hair

    }
    getFullName(){
        return this.clothes + ' ' + this.hair + ' '
    }
}

class man extends human {
    constructor (mann, clothes, hair ) {
        super(clothes, hair)
        this.mann = mann
    }
    getFullName(){
        return this.mann
    }
}

let man1 = new man ('man', 'suit', 'hort')
man1.getFullName()


class woman extends human {
    constructor (womann, clothes, hair) {
        super (womann, clothes, hair)
        this.womann = womann
    }
    getFullName(){
        return this.womann
    }

}
let woman1 = new woman1('woman', 'dress', 'long')
woman1.getFullName()
