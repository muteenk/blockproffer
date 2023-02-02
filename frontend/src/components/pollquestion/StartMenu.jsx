import React from 'react'
import { useContext } from 'react'
import { PollContext } from '../../Helpers/Contexts'

function StartMenu() {
    const { question, setQuestion } = useContext(PollContext)
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat temporibus veniam tenetur impedit animi facere, voluptas totam sint ratione at minima cum eius culpa molestiae enim illo! Quod recusandae blanditiis accusamus sit unde ipsa ducimus, cum atque nam delectus, ipsam sed dolores quidem eius rerum voluptatum sequi voluptatibus nisi ullam quasi expedita in, nostrum aperiam et. Maiores unde voluptatem doloribus architecto molestias dignissimos ipsam ipsa repellendus ullam at iusto officia, consectetur aliquid veritatis neque reiciendis porro odio eos beatae alias? Id corrupti quae aliquid recusandae architecto. Beatae, alias natus assumenda sed a facere cum deserunt facilis earum ab eius.</p>
        <button class="mt-12 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick= {() => setQuestion("poll")}>
            Start
        </button>
    </div>
  )
}

export default StartMenu