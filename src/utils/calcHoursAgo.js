export default function calcHoursAgo(minutes){
    if(minutes < 60){
        return `${minutes}m atrás`
    }
    
    return `${minutes/60}h atrás`
}