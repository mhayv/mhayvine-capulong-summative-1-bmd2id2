import { supabase } from './connection.js'

const { data, error } = await supabase
    .from('data')
    .select('*')


document.querySelector("#posts").innerHTML = data.map(post =>
    `
      <section class="information">

                <h2 class="eventtitle">${post.title}</h2>


                <h5>${new Date(post.date).toLocaleString('en-NZ', {dateStyle:'full'})} , ${post.time}</h5>
                <h5 class="topspacing"> ${post.area}</h5>

                
                <div class="tags">
                    <h5>paint</h5>
                    <h5>BYO</h5>
                    <h5>picnic</h5>
                </div>
                <p>${post.description}</p>
            </section>
    
    
    
    `
).join('')


