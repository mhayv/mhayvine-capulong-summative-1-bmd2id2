import { supabase } from './connection.js'

const { data, error } = await supabase
    .from('data')
    .select('*')

document.querySelector("#posts").innerHTML = data.map(post =>
    `
      <section class="information">

                <h2 class="eventtitle">${post.title}</h2>
                <h5>${post.date}</h5>
                <div class="tags">
                    <h5>paint</h5>
                    <h5>BYO</h5>
                    <h5>picnic</h5>
                </div>
                <p>${post.description}</p>
                <p>| No RSVP required! | No Attendee Limit! | </p>
            </section>
    
    
    
    `
).join('')