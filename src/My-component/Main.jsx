import React from 'react'
import component1 from './assets/Component 5.png';
import component2 from './assets/Component 6.png';
import component3 from './assets/Component 7.png';
import component4 from './assets/Component 8.png';
import hero_img from './assets/hero-img.png';
import we_are from './assets/we-are.png';
const Main = () => {
    return (

        <main>
            <section className="hero">
                <div className="sect-hero1">
                    <h1>AssisTech</h1>
                    <i>Redefining Assistance, One Innovation at a Time</i>
                    <img src={hero_img} alt="hero-img" id="m-i" />
                    <p>
                        At Assistech, we specialize in delivering innovative, technology-driven solutions
                        designed to simplify lives and empower businesses. With a focus on cutting-edge
                        advancements and customer-centric approaches, we bridge the gap between technology
                        and real-world needs. Our mission is to create smarter, more sustainable solutions for a better tomorrow.
                    </p>
                    <div className="hero-btns">
                        <button className="get-in-touch-btn" id="git">Get in Touch</button>
                        <button className="get-in-touch-btn" id="know">Know more</button>
                    </div>
                </div>
                <div className="sect-hero2">
                    <img src={hero_img} alt="hero-img" />
                </div>
            </section>

            <div className="hr"></div>
            <div className="box-m">
                <div><img src={component1} alt="Component 5" /></div>
                <div><img src={component2} alt="Component 6" /></div>
                <div><img src={component3} alt="Component 7" /></div>
                <div><img src={component4} alt="Component 8" /></div>
            </div>
            <section className="we-are">
                <div className="sect-we-are1">
                    <img src={we_are} alt="we are img" />
                </div>
                <div className="sect-we-are2">
                    <h2>WE ARE</h2>
                    <h1>ASSISTECH</h1>
                    <img src={we_are} alt="we-are img" id='w-a-i'/>
                    <p> Assistech is a technology-driven company committed to delivering innovative solutions that simplify complexities and drive progress. With a strong focus on combining cutting-edge advancements with customer-centric strategies, we specialize in creating tailored services that empower businesses and enhance everyday life. With a strong focus on combining cutting-edge advancements with customer-centric strategies, we specialize in creating tailored services that empower businesses and enhance everyday life.</p>
                    <div className="tags">
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M440-120v-60h340v-304q0-123.69-87.32-209.84Q605.36-780 480-780q-125.36 0-212.68 86.16Q180-607.69 180-484v244h-20q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v69q0 24.75-17.62 42.37Q804.75-120 780-120H440Zm-80.18-290q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm240 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM241-462q-7-106 64-182t177-76q87 0 151 57.5T711-519q-89-1-162.5-50T434.72-698Q419-618 367.5-555.5T241-462Z"/></svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z"/></svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M475-140q5 0 11.5-2.5T497-149l337-338q13-13 19.5-29.67Q860-533.33 860-550q0-17-6.5-34T834-614L654-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5Q540-807 527-794l-18 18 81 82q13 14 23 32.5t10 40.5q0 38-29.5 67T526-525q-25 0-41.5-7.5t-30.19-21.34L381-627 200-446q-5 5-7 10.53-2 5.52-2 11.84 0 12.63 8.5 21.13 8.5 8.5 21.17 8.5 6.33 0 11.83-3t9.5-7l138-138 42 42-137 137q-5 5-7 11t-2 12q0 12 9 21t21 9q6 0 11.5-2.5t9.5-6.5l138-138 42 42-137 137q-4 4-6.5 10.33-2.5 6.34-2.5 12.67 0 12 9 21t21 9q6 0 11-2t10-7l138-138 42 42-138 138q-5 5-7 11t-2 11q0 14 8 22t22 8Zm.06 60Q442-80 416-104.5t-31-60.62Q351-170 328-193t-28-57q-34-5-56.5-28.5T216-335q-37-5-61-30t-24-60q0-17 6.72-34.05Q144.45-476.1 157-489l224-224 110 110q8 8 17.33 12.5 9.34 4.5 18.67 4.5 13 0 24.5-11.5t11.5-24.65q0-5.85-3.5-13.35T548-651L405-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5-16.67 6.5-29.61 19.36L126-642q-14 14-19.5 29.5t-6.5 35q-1 19.5 7.5 38T128-506l-43 43q-20-22-32.5-53T40-579q0-30 11.5-57.5T84-685l151-151q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T448-836l18 18 18-18q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T697-836l179 179q22 22 33 50.03 11 28.04 11 57 0 28.97-11 56.47T876-444L539-107q-13 13-29.53 20t-34.41 7ZM377-626Z"/></svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M180-217q60-56 135.9-90.5 75.89-34.5 164-34.5 88.1 0 164.1 34.5T780-217v-563H180v563Zm302-204q58 0 98-40t40-98q0-58-40-98t-98-40q-58 0-98 40t-40 98q0 58 40 98t98 40ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm43-60h513q-62-53-125.5-77.5T480-282q-67 0-130.5 24.5T223-180Zm259-301q-32.5 0-55.25-22.75T404-559q0-32.5 22.75-55.25T482-637q32.5 0 55.25 22.75T560-559q0 32.5-22.75 55.25T482-481Zm-2-18Z"/></svg></li>
                        </ul>
                    </div>
                    <button className="get-in-touch-btn" id="know">KNOW MORE</button>
                </div>
            </section>
        </main>
    )
}

export default Main