type ModalProps = {
    showModal: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ showModal, onClose, children }: ModalProps) => {
    if (!showModal) { return null; }

    return (
        <div className = "fixed inset-0 bg-gray-600/50 flex items-center justify-center z-50">
            {/* Modal Container */ }
            <div className = "relative bg-white p-8 w-96 max-w-lg rounded-lg shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-white hover:bg-gradient-to-br hover:from-yellow-100 hover:to-orange-400 transition duration-300 px-4 py-2 font-medium text-gray-400 rounded-full">
                        &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;