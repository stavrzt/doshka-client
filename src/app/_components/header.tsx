import Logo from "../_icons/logo";
import Message from "../_icons/message";

export default function Header() {
    return (
        <header className={'bg-gray-800 py-5'}>
            <div className={'flex justify-between items-center container mx-auto px-4 text-white'}>
                <Logo fillColor="white" />

                <ul className={'flex gap-4'}>
                    <li>
                       <Message fillColor="white"/>
                        Повідомлення
                    </li>
                    <li>
                        Укр|Рус
                    </li>
                    <li>Wishlist</li>
                    <li>Profile</li>
                    <li>
                        <button type="button">Додати оголошення</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}
