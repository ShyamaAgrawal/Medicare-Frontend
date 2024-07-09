import { faqs } from '../../assets/data/faqs.js'
import FaqItem from './FaqItem'

const FaqList = () => {
    return (
        <ul className="mt-[38px] ">
            {faqs.map((faq, index) => <FaqItem key={index} faq={faq} />)}
        </ul>

    )
}

export default FaqList