import React from "react"
import Layout from "../components/layout"
import PostDate from "./postdate"
import PostNav from "./postnav"

export default function BlogPost(props) {
  return (
    <Layout>

<div class="post">
            <PostDate>{props.children.date}</PostDate>
            {/* <p class="date"><small>56/78/9833</small></p> */}
            <h2>Here's a Post!</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              saepe quod quaerat doloremque
              <a href="http://google.com">distinctio ex iusto veritatis</a> officiis ullam odit
              quam, impedit iure autem veniam voluptatibus fuga! Minus, mollitia
              cum! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Odit excepturi natus deleniti placeat quae repellat quas provident
              nostrum minus. Alias quasi repellendus quaerat laudantium debitis
              iure quia dolore doloribus labore.
            </p>
          </div>
{/* <          <div class="post-nav">
            <div class="move newer">← newer</div>
            <div class="move older">older →</div>
          </div>> */}

<PostNav/>

    </Layout>
  )
}