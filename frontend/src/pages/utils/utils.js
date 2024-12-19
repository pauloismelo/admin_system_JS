export const americanDate = (data) =>{
    const date = new Date(data); // Converte o dado para objeto Date
    return new Intl.DateTimeFormat('en-US').format(date);
}
