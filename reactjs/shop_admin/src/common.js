function getBase()
{
    return "https://theeasylearnacademy.com/shop/";
}
//note. only one function can be exported as default function
export default function getBaseAddress()
{
    return getBase() + "ws/";
}
export function getBaseImageAddress()
{
    return getBase() + "images/";
}
