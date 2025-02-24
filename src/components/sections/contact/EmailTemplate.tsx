interface ContactEmailTemplateProps {
  name: string;
  email: string;
  company?: string;
  inquiryType: 'general' | 'business';
  message: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  company,
  inquiryType,
  message
}: ContactEmailTemplateProps) => (
  <div>
    <h2>新規お問い合わせ</h2>
    <div>
      <p><strong>お名前:</strong> {name}</p>
      <p><strong>メールアドレス:</strong> {email}</p>
      <p><strong>会社名:</strong> {company || '記入なし'}</p>
      <p><strong>お問い合わせ種別:</strong> {
        inquiryType === 'general' ? 'プログラミング学習について' : 'ビジネスに関するお問い合わせ'
      }</p>
      <p><strong>ご相談内容:</strong></p>
      <pre>{message}</pre>
    </div>
  </div>
);