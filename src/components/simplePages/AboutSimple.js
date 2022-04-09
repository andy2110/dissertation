import {useContext} from "react";
import {
    FontColourContext,
    TextColourContext
} from "../Contexts";
import {Link} from "react-router-dom";

const AboutSimple = () => {
    const TextColour = useContext(TextColourContext)
    const FontColour = useContext(FontColourContext)

    const pageStyle = {
        backgroundColor: TextColour,
        color: FontColour
    }

    return(
        <div style={pageStyle}>
                <p>
                    We help families with autistic children. We know what it is like to have a child with autism. Your child could be:
                    <ul>
                        <li>Fussy</li>
                        <li>Easily overwhelmed</li>
                        <li>Like different things to other children</li>
                        <li>Be difficult to manage</li>
                    </ul>
                    Our aim is to help you manage this.
                </p>

                <h3>What We Do</h3>
                <p>We offer a service where a support worker can come with you or your child to different
                    activities. This can give you more free time to relax or do chores.</p>
                <p>
                    When you start with us, we will visit your home to discuss:
                    <ul>
                        <li>What your child needs</li>
                        <li>What you need</li>
                    </ul>
                    Once we have spoken to you, we will find a support worker to suit your child. We will
                    look at:
                    <ul>
                        <li>Shared interests</li>
                        <li>Availability</li>
                        <li>Gender</li>
                    </ul>
                </p>
                <p>
                    All of our support workers have been DBS-checked, training about autism, and know how to
                    support autistic people.
                </p>
                <p>
                    ‘DBS’ means Disclosure and Barring Service. This will ensure that our support workers
                    are able to safely work with you and your child.
                </p>
                <p>
                    When a support worker is new, they will practice sessions with other support workers
                    before they can work alone.
                </p>
                <p>
                    This means your child will always be cared for safely.
                </p>
                <p>
                    If your child is unsure about anything, we can explain it to them visually or with
                    stories. This will make them more comfortable about being with a support worker.
                </p>
                <p>
                    Please <Link to='/contact'>get in touch</Link> today to find out more!
                </p>

        </div>
    )
}

export default AboutSimple