"use client";

interface PolicyModalProps {
  onClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-lg p-6 rounded shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4">Çerez Politikası</h2>
        <p className="text-sm text-gray-700 mb-4">
          Bu web sitesi çerezleri kullanmaktadır. Çerezlerin nasıl kullanıldığı
          hakkında detaylı bilgiye buradan ulaşabilirsiniz.
        </p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PolicyModal;
