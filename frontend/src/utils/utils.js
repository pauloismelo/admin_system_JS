export const americanDate = (data) =>{
    const date = new Date(data); // Converte o dado para objeto Date
    return new Intl.DateTimeFormat('en-US').format(date);
}

export const validaSenha = (senha)=>{
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/; //old way to verify

    if (senha){
        const letterUp = /[A-Z]/;
        const caractere = /[!@#$%^&*(),.?":{}|<>]/g;
        const size = /^.{6,}$/;
        
        /*
        * Aceita zero antes de qualquer letra
        [A-Z]: Procura por pelo menos uma letra maiúscula (A a Z).

        [!@#$%^&*(),.?":{}|<>]: Procura por pelo menos um caractere especial de entre os especificados (!, @, #, ...)
        {6,}: Significa que a string deve ter no mínimo 6 caracteres.
        */
        return [letterUp.test(senha), caractere.test(senha), size.test(senha)]
    }else{
        return [false, false, false]
    }

    
}