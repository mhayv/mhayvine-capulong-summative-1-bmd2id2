import { supabase } from './connection.js'

const { data, error } = await supabase
    .from('events')
    .select('*')

document.querySelector("#events").innerHTML = data.map(post =>
    `
     <article>
        <h4>${post.title}</h4>
        <h5>${post.date}</h5>
        <h5>${post.area}</h5>
        <h5>${post.tag}</h5>
        <p>${post.description}</p>
     </article>
    
    
    
    `
).join('')