export default function IconHomeV2({ className,isActive }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            className={className}
        >
            <path
                d='M15.7897 6.45867L13.5085 4.53609V1.80689C13.5086 1.73986 13.4955 1.67347 13.4699 1.61152C13.4443 1.54957 13.4068 1.49327 13.3594 1.44585C13.312 1.39842 13.2558 1.3608 13.1939 1.33513C13.1319 1.30946 13.0656 1.29624 12.9985 1.29624H11.382C11.3149 1.29616 11.2484 1.3093 11.1864 1.33494C11.1244 1.36057 11.0681 1.39818 11.0207 1.44561C10.9732 1.49305 10.9356 1.54938 10.91 1.61137C10.8844 1.67336 10.8712 1.7398 10.8713 1.80689V2.31286L8.44476 0.267626C8.32355 0.153436 8.16331 0.0898438 7.99678 0.0898438C7.83026 0.0898438 7.67002 0.153436 7.54881 0.267626L0.210487 6.45867C0.113394 6.54906 0.0457616 6.66658 0.0163935 6.79594C-0.0129747 6.92531 -0.00271825 7.06051 0.0458277 7.18397C0.094701 7.30665 0.179294 7.41184 0.288645 7.48589C0.397997 7.55994 0.527067 7.59944 0.659132 7.59928H1.72041V15.2536C1.72041 15.6156 2.01707 15.9129 2.38038 15.9129H13.6199C13.7948 15.9125 13.9624 15.8429 14.0861 15.7192C14.2098 15.5955 14.2795 15.4278 14.2798 15.2529V7.59995H15.3411C15.4741 7.60014 15.604 7.55987 15.7135 7.4845C15.823 7.40913 15.9071 7.30222 15.9544 7.17797C16.0025 7.05553 16.0125 6.92142 15.9831 6.7932C15.9538 6.66498 15.8864 6.54795 15.7897 6.45867ZM8.49809 13.5157C8.43158 13.6062 8.34469 13.6798 8.24446 13.7305C8.14423 13.7813 8.03346 13.8077 7.92112 13.8077C7.80878 13.8077 7.69802 13.7813 7.59778 13.7305C7.49755 13.6798 7.41067 13.6062 7.34415 13.5157C6.43419 12.2631 4.7596 9.79717 4.7596 8.5319C4.76102 7.6936 5.09507 6.89014 5.68839 6.29793C6.28172 5.70573 7.08582 5.37321 7.92412 5.37338C8.76242 5.37321 9.56652 5.70573 10.1598 6.29793C10.7532 6.89014 11.0872 7.6936 11.0886 8.5319C11.0886 9.79717 9.41405 12.2631 8.49809 13.5157Z'
                fill={isActive?'#B34B1E':'#284A0C'}
            />
            <path
                d='M8 10.3125C9.10457 10.3125 10 9.41707 10 8.3125C10 7.20793 9.10457 6.3125 8 6.3125C6.89543 6.3125 6 7.20793 6 8.3125C6 9.41707 6.89543 10.3125 8 10.3125Z'
                fill={isActive?'#B34B1E':'#284A0C'}
            />
        </svg>
    )
}
