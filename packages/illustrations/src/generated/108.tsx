import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg108 = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 900 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="transparent" d="M0 0h900v600H0z" />
    <path
      d="M371.603 338.338c31.507-9.568 64.39-14.352 97.32-15.299 16.418-.474 32.883.095 49.159 2.037 14.804 1.799 29.846 4.452 43.986 9.378 12.337 4.263 25.434 12.41 24.247 27.236.048-.427.095-.805.095-1.232l.285-1.847c3.274-19.373 6.596-38.698 9.87-58.071.427-2.084.474-2.416.142-1.042.095-.379.19-.806.285-1.184-2.42 8.668-8.114 15.725-13.666 22.593-5.457 6.726-11.103 13.5-14.994 21.268-1.993 4.026-3.464 7.91-4.413 12.268-2.752 12.694-4.555 25.956-6.691 38.745-1.755 10.421-4.033 21.031-4.935 31.594-.711 8.242 1.661 16.01 7.213 22.215 11.53 12.883 30.036 16.436 46.596 16.483 17.319 0 34.876-3.079 52.053.379 8.778 1.8 17.319 5.447 23.488 12.079 6.216 6.678 12.147 16.673 11.483 26.098.047-.426.095-.805.095-1.231.712-4.642 1.471-9.237 2.183-13.878 2.894-16.437 5.741-32.92 8.636-49.356-.048.237-.095.426-.143.663.095-.379.19-.805.285-1.184-3.938 15.157-21.732 17.241-34.734 17.999-.332 0-2.182 11.226-1.898 9.805-1.423 7.91-2.799 15.82-4.128 23.778-1.329 7.91-2.705 15.867-3.938 23.778-.143.994-1.329 9.899-1.424 9.899 7.972-.473 16.371-.9 23.536-4.689 3.036-1.61 5.836-3.837 7.971-6.584 3.274-4.263 3.891-9.379 4.84-14.541 2.895-15.821 5.599-31.689 8.162-47.556.854-5.353 2.372-11.037 2.135-16.531-.19-3.979-1.566-7.816-3.274-11.368-3.369-6.868-8.019-13.263-14.425-17.573-13.001-8.668-29.799-8.905-44.841-8.242-15.895.711-32.218 2.605-47.782-1.8-8.351-2.368-16.56-6.489-22.586-12.836-6.027-6.347-8.684-14.352-7.972-23.068-.048.427-.095.806-.095 1.232 1.186-11.036-.522-1.137-5.125 29.651-5.836 30.599-7.497 40.451-4.982 29.652-.095.379-.19.805-.285 1.184 2.563-10.042 8.494-18.52 14.9-26.525 6.168-7.721 13.381-15.347 16.702-24.868 1.614-4.642 2.278-9.662 3.132-14.446 3.416-18.9 7.118-37.941 9.538-56.982.569-4.642.237-9.189-1.899-13.405-3.416-6.679-10.154-10.941-16.892-13.831-8.066-3.505-16.845-5.542-25.433-7.389a264.965 264.965 0 0 0-32.266-4.831c-21.733-1.99-43.655-1.611-65.387.331-24.579 2.179-48.969 6.679-72.599 13.831-.569.19-2.135 10.989-1.898 9.805-1.424 7.91-2.8 15.82-4.128 23.778-1.329 7.91-2.705 15.868-3.939 23.778-.284 1.752-.569 3.505-.806 5.258-.427 1.468-.617 3.031-.759 4.594z"
      fill="#E1E4E5"
    />
    <path
      d="M596.371 300.297c-2.719 7.694-7.92 14.193-13.025 20.501-4.485 5.592-9.161 11.183-12.835 17.348 0 0 .048 0 .048.048h-.096c-.811 1.338-1.526 2.676-2.242 4.062-2.004 4.062-3.388 8.315-4.342 12.712 0 .096-.048.239-.048.335-.047.573-.095 1.481-.238 2.771-.621 8.65 2.004 16.631 8.015 22.987a40.207 40.207 0 0 0 3.627 3.346c3.912-4.971 7.491-10.227 9.542-16.201 1.622-4.684 2.29-9.749 3.149-14.576 3.436-19.068 7.157-38.28 9.591-57.491.047-.191.047-.43.047-.621-.334 1.577-.811 3.202-1.193 4.779zm.43-1.052c.095-.43.143-.669.191-.764-.096.238-.143.525-.191.764z"
      fill="url(#a)"
    />
    <path
      d="M704.252 438.382c-.048.143-.048.238-.095.38.047-.237.095-.427.142-.665 0 .095 0 .19-.047.285.047-.285.142-.57.19-.808-3.944 15.212-21.764 17.303-34.784 18.064-.333 0-2.186 11.266-1.901 9.84-.095.57-.19 1.093-.285 1.664.095.047.237.095.332.142-.047.048-.095.095-.142.095-.095.048-.19.143-.285.191a2984.242 2984.242 0 0 0-3.802 21.771c-1.33 7.939-2.708 15.925-3.944 23.864-.142.998-1.33 9.935-1.425 9.935 7.983-.475 16.394-.903 23.569-4.706 3.041-1.616 5.845-3.851 7.983-6.608 3.279-4.278 3.897-9.412 4.847-14.594 2.899-15.877 5.608-31.802 8.174-47.726.617-3.803 1.52-7.749 1.948-11.647-.143.285-.285.571-.475.856v-.333z"
      fill="url(#b)"
    />
    <path
      d="M531.924 433.623c-31.507 9.568-64.39 14.352-97.321 15.299-16.418.474-32.883-.095-49.158-2.037-14.805-1.8-29.847-4.452-43.987-9.378-12.337-4.263-25.433-12.41-24.247-27.236-.047.426-.095.805-.095 1.232l-.285 1.847c-3.274 19.373-6.595 38.698-9.869 58.071-.427 2.084-.475 2.416-.143 1.042-.094.379-.189.805-.284 1.184 2.42-8.668 8.114-15.725 13.665-22.593 5.457-6.726 11.104-13.5 14.995-21.268 1.993-4.026 3.464-7.91 4.413-12.268 2.752-12.694 4.555-25.957 6.69-38.745 1.756-10.421 4.033-21.031 4.935-31.594.712-8.242-1.661-16.01-7.213-22.215-11.53-12.883-30.036-16.436-46.596-16.483-17.319 0-34.876 3.079-52.053-.379-8.778-1.8-17.319-5.447-23.488-12.079-6.216-6.678-12.147-16.673-11.483-26.098-.047.426-.095.805-.095 1.231-.711 4.642-1.47 9.236-2.182 13.878-2.895 16.437-5.742 32.92-8.636 49.356.047-.237.095-.426.142-.663-.095.379-.19.805-.285 1.184 3.939-15.157 21.733-17.241 34.734-17.999.332 0 2.183-11.226 1.898-9.805 1.424-7.91 2.8-15.82 4.128-23.778 1.329-7.91 2.705-15.868 3.939-23.778.142-.994 1.328-9.899 1.423-9.899-7.971.473-16.37.9-23.535 4.689-3.037 1.61-5.837 3.837-7.972 6.584-3.274 4.263-3.891 9.378-4.84 14.541a2316.675 2316.675 0 0 0-8.161 47.556c-.854 5.353-2.373 11.037-2.136 16.531.19 3.979 1.566 7.816 3.275 11.368 3.369 6.868 8.019 13.263 14.424 17.573 13.002 8.668 29.799 8.905 44.841 8.242 15.896-.711 32.219-2.605 47.782 1.8 8.352 2.368 16.561 6.489 22.587 12.836s8.683 14.352 7.972 23.067c.047-.426.094-.805.094-1.231-1.186 11.036.522 1.137 5.125-29.651 5.836-30.599 7.497-40.451 4.982-29.652.095-.379.19-.805.285-1.184-2.562 10.042-8.494 18.52-14.899 26.525-6.169 7.721-13.381 15.347-16.703 24.868-1.613 4.641-2.278 9.662-3.132 14.446-3.416 18.9-7.117 37.941-9.537 56.982-.57 4.642-.237 9.189 1.898 13.405 3.416 6.678 10.154 10.941 16.892 13.831 8.067 3.505 16.845 5.542 25.434 7.389a264.907 264.907 0 0 0 32.266 4.831c21.732 1.99 43.654 1.611 65.386-.331 24.58-2.179 48.969-6.679 72.599-13.831.57-.19 2.136-10.989 1.898-9.805 1.424-7.91 2.8-15.82 4.129-23.778 1.328-7.91 2.704-15.868 3.938-23.778.285-1.752.569-3.505.807-5.258.427-1.468.616-3.031.759-4.594z"
      fill="#E1E4E5"
    />
    <path
      d="M307.155 471.664c2.72-7.694 7.92-14.193 13.026-20.501 4.485-5.592 9.16-11.183 12.834-17.348 0 0-.047 0-.047-.048h.095c.811-1.338 1.527-2.676 2.243-4.062 2.003-4.062 3.387-8.316 4.341-12.712 0-.096.048-.239.048-.335.048-.573.096-1.481.239-2.772.62-8.649-2.004-16.63-8.016-22.986a40.195 40.195 0 0 0-3.626-3.346c-3.913 4.97-7.491 10.227-9.543 16.201-1.622 4.683-2.29 9.749-3.149 14.576-3.435 19.068-7.157 38.28-9.59 57.491-.048.191-.048.43-.048.621.334-1.577.811-3.202 1.193-4.779zm-.429 1.052c-.096.43-.144.669-.191.764.095-.239.143-.525.191-.764z"
      fill="url(#c)"
    />
    <path
      d="M199.275 333.579c.047-.143.047-.238.095-.38-.048.237-.095.427-.143.665 0-.095 0-.19.048-.285-.048.285-.143.57-.19.808 3.944-15.212 21.763-17.303 34.784-18.064.332 0 2.186-11.266 1.9-9.84.095-.57.19-1.093.286-1.664-.096-.047-.238-.095-.333-.142.047-.048.095-.095.142-.095.096-.048.191-.143.286-.191a2931.36 2931.36 0 0 0 3.801-21.771c1.331-7.939 2.709-15.925 3.944-23.864.143-.998 1.331-9.935 1.426-9.935-7.983.475-16.394.903-23.57 4.706-3.041 1.616-5.845 3.851-7.983 6.608-3.279 4.278-3.897 9.412-4.847 14.593-2.899 15.878-5.607 31.803-8.173 47.727-.618 3.803-1.521 7.749-1.949 11.647.143-.285.286-.571.476-.856v.333z"
      fill="url(#d)"
    />
    <circle cx={472.153} cy={339.202} r={113.118} fill="#6f381e" />
    <path
      d="M383.404 300.866c-7.171-2.422-13.386-7.582-17.015-14.2-1.024-1.826-1.862-3.922-1.586-5.998.07-.423.177-.923.558-1.12.342-.197.804-.089 1.189.02 11.977 3.231 24.639 8.677 37.21 8.102.575-.008 1.15-.055 1.652.167.617.259 1.01.829 1.287 1.438.951 1.98 1.775 5.726 1.463 7.955-.381 2.652-2.945 3.036-5.199 3.607-6.418 1.632-13.16 2.195-19.559.029z"
      fill="#F8AE9D"
    />
    <path
      d="M382.297 286.002c-.965-.407-1.968-.814-3.004-.836-1.036-.023-2.178.531-2.508 1.533-.22.694-.017 1.42.261 2.068.754 1.676 2.079 3.036 3.478 4.242 5.361 4.521 12.23 7.255 19.255 7.685 3.109.183 6.365-.097 9.104-1.557-1.368-1.667-1.097-4.049-1.244-6.156-.439-6.168-5.696-3.826-9.915-3.838-5.294-.112-10.564-1.144-15.427-3.141z"
      fill="#F8AE9D"
    />
    <path
      d="m542.761 240.38.241.686c1.685 4.884 2.989 9.927 3.527 15.096.988 9.496-.875 20.609-8.019 27.506-9.525 9.195-24.807 10.616-37.228 8.427a31.433 31.433 0 0 1-13.939-6.193c-4.048 3.667-8.398 7.683-12.017 11.765a91.476 91.476 0 0 1-20.598-10.272c-15.159 6.942-30.621 11.626-46.946 15.018a63.342 63.342 0 0 1-3.901-14.438c-.127-.803 10.047-7.669 11.221-8.646 3.522-2.968 10.859-9.753 10.859-9.753s-9.248-7.875-13.293-11.572a192.503 192.503 0 0 1-12.303-12.086c-3.236-3.48-6.398-7.152-8.382-11.494-1.983-4.304-2.712-9.393-1.054-13.868 5.235-13.924 26.364-9.029 36.179-4.231 8.114 3.981 15.221 9.779 22.06 15.658 2.759 2.336 5.48 4.749 8.163 7.125 2.114-2.18 4.449-5.015 6.447-7.309 2.148-2.487 4.606-4.825 7.575-6.289 3.121-1.582 6.001-1.357 9.33-1.83 1.493-.214 2.943-.658 4.397-.91 4.36-.795 8.975.055 12.806 2.298 3.638 2.131 6.591 4.656 10.86 5.473 4.847.924 10.476.378 15.337-.271 4.363-.604 8.797-1.591 13.144-.737 1.808.356 2.498 2.877 3.096 4.325.799 2.098 1.637 4.271 2.438 6.522zM504.249 79.766s11.735-1.867 14.887 18.85c3.501 23.03 12.851 19.241 27.7 37.942 8.678 10.927-.455 30.225-19.013 29.842-18.558-.373-35.318-5.739-45.993-3.443-10.675 2.296-11.261-25.046-.729-33.482 10.533-8.436-11.924-32.66 1.761-43.448 13.684-10.787 21.387-6.261 21.387-6.261z"
      fill="#2D2019"
    />
    <path
      d="M574.394 171.115c1.07-2.199 1.005-4.754.619-7.138-1.673-10.233-8.845-18.785-17.065-25.051-8.247-6.283-17.686-10.768-26.363-16.398-2.252-1.466-4.509-3.045-7.095-3.837-2.585-.793-5.59-.707-7.725.96-1.507 1.17-2.378 2.978-2.885 4.788-1.111 3.961-.685 8.156-.008 12.174.848 5.068 2.091 10.084 4.134 14.742 1.637 3.758 4.302 7.625 8.307 8.361 1.159 4.491 3.545 8.7 6.892 11.92 3.827 3.692 8.681 6.106 13.717 7.793 4.641 1.556 9.717 2.573 14.385 1.12 2.77-.846 5.21-2.475 7.597-4.136 2.129-1.416 4.339-2.965 5.49-5.298zm-41.941-6.824-2.74-4.349a6.03 6.03 0 0 1 1.692.4c1.504.651 2.41 3.02 1.048 3.949z"
      fill="#2D2019"
    />
    <path
      d="M481.689 97.984c-.141.769-.168 1.575-.115 2.494a51.223 51.223 0 0 0 3.421 15.673c1.196 2.973 2.659 5.904 4.729 8.366.86 1.022 1.833 1.966 3.104 2.33 1.31.364 2.96.416 4.259.089 1.145 4.738.668 13.682-3.423 17.042-1.251 1.016-2.737 1.653-4.224 2.212-2.898 1.118-5.915 1.969-8.935 2.629-3.44.742-7.19 1.298-9.606 3.828-.302.311-.603.737-.481 1.157.08.268.275.456.508.606 1.902 1.544 4.255 2.39 6.606 3.198 4.125 1.395 8.362 2.558 12.669 3.336 4.5.814 9.146 1.204 13.703.713 3.522-.399 6.999-1.296 10.196-2.878 3.35-1.662 6.781-3.018 10.247-4.605 2.933-1.348 5.824-2.888 8.999-3.435-1.501-2.854-4.631-4.455-7.75-5.213-3.117-.72-6.378-.785-9.532-1.389-1.039-.215-2.078-.467-2.97-1.106-2.443-1.765-1.774-5.688-1.813-8.257l-.123-8.128c.362-3.88 1.962-7.125 3.366-10.675 2.142-5.441 2.585-11.622.697-17.193-1.886-5.532-6.178-10.338-11.692-12.287-5.514-1.949-12.132-.851-16.366 3.202-2.684 2.61-4.873 4.945-5.474 8.29z"
      fill="#F8AE9D"
    />
    <path
      d="M498.646 80.698c-5.496-.613-10.503 2.078-14.216 6.25-3.124 3.497-4.96 8.113-4.867 12.751.013.663.087 1.384.461 1.98.992 1.426 3.151.901 4.766.266 2.631-1.017 4.589-2.502 6.975-3.755 2.385-1.253 5.281-1.07 7.416-2.8 2.015-1.667 8.935-5.18 9.121-7.895.235-3.318-5.844-6.029-8.386-6.58-.364-.114-.787-.166-1.27-.217z"
      fill="#2D2019"
    />
    <path
      d="M514.479 88.211c4.647 2.997 6.828 8.248 7.07 13.827.211 4.684-1.283 9.422-4.285 12.959-.429.505-.943 1.017-1.608 1.242-1.671.478-3.012-1.293-3.862-2.805-1.397-2.45-1.977-4.839-3.034-7.317-1.057-2.478-3.418-4.166-3.979-6.856-.509-2.566-3.653-9.66-2.082-11.883 1.915-2.721 8.34-.98 10.659.198.354.142.714.37 1.121.635z"
      fill="#2D2019"
    />
    <path
      d="M473.142 151.462c-.734-.334-1.612-.091-2.101.569-5.482 7.677-7.599 17.297-9.453 26.568-2.102 10.541-3.974 21.116-5.77 31.69-.107.539-.175 1.115.063 1.61.238.495.779.756 1.281.978 3.168 1.524 6.373 3.01 9.542 4.534a105.304 105.304 0 0 0 7.339-24.312c2.034 5.147 5.707 9.617 10.392 12.537-3.491 5-7.788 14.999-11.978 19.397-.641.7-4.608-.391-5.495-.684-.551 1.581 2.031-.108 2.017 1.503 2.384.348 5.43-1.079 7.88-1.385a40.59 40.59 0 0 1 8.897-.058c4.917.539 9.696 2.077 14.065 4.388a50.04 50.04 0 0 1 6.235 3.933c1.707 1.278 5.933 4.282 5.933 4.282.31.225 1.763-.104 2.106-.186.995-.168 1.99-.298 3.024-.391a71.842 71.842 0 0 0 7.579-.997c5.01-.92 9.936-2.337 14.662-4.288.455-.352-1.168-3.703-1.255-4.353.086.612 9.394-.143 10.312-.31 3.671-.746 7.385-1.148 11.055-1.932-1.644-14.78-6.156-29.055-10.59-43.216-1.734-5.574-3.506-11.146-5.964-16.401-2.616-5.599-5.994-10.84-10.053-15.496-.117-.113-.31-.187-.463-.146-1.948.49-13.829 3.547-19.741 5.746-3.012 1.158-6.064 2.202-9.155 3.246-1.221.402-2.481.804-3.747.785-.844-.025-1.69-.204-2.498-.384-8.236-1.831-16.473-3.815-24.119-7.227z"
      fill="#6f381e"
    />
    <path
      d="M526.746 180.908c.339 2.104.793 4.245 1.247 6.347a111.888 111.888 0 0 0 4.24 14.05c.879 2.288 1.795 4.536 2.826 6.784.516 1.104 1.031 2.208 1.585 3.312.276.533.553 1.104.83 1.637.237.456.512.874.748 1.292-1.65-.051-9.793.418-11.478.559"
      stroke="#fff"
      strokeWidth={1.376}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M526.48 216.541c.17 1.072.378 2.142.624 3.212l.74 3.211c.244.917.798 2.059.812 3.017-.002-.191-6.531-.744-7.145-.812-6.799-.663-13.632-1.058-20.427-1.492-4.414-.278-8.747-.174-13.157-.145-1.304.02-2.84-.11-3.546-1.174-.589-.911-.108-2.069-.581-2.905-.306.081-3.859.979-3.822.901-.141.808-.422 2.5-1.26 2.896-.305.12-.611.163-.918.167-.46.007-.921-.062-1.382-.132a.292.292 0 0 1-.193-.074c-.078-.075-.003-.192.072-.308a9.144 9.144 0 0 0 1.569-5.24c1.101-.745 2.2-1.606 3.145-2.54.755-.779 1.315-1.785 2.149-2.449.871-.742 1.721-.295 2.684-.041a46.45 46.45 0 0 1 3.311.87c2.12.658 4.242 1.47 6.026 2.785.62.451 1.203.941 1.935 1.16.694.219 1.461.208 2.189.197 4.486-.107 8.97-.329 13.411-.818 4.557-.491 7.664-.423 13.634-1.319 0 .038.005.383.13 1.033z"
      fill="#F8AE9D"
    />
    <path
      d="M477.081 180.482a120.885 120.885 0 0 0-2.369 14.093"
      stroke="#fff"
      strokeWidth={1.376}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="m386.638 172.834 13.165 58.71 99.962-1.518c-.053-3.451-2.895-6.246-6.384-6.193l-23.888.363-11.905-54.012a3.77 3.77 0 0 0-3.727-2.973l-63.574.966c-2.415.075-4.184 2.288-3.649 4.657z"
      fill="#2D2019"
    />
    <path
      d="M517.222 316.284c-.462-2.678-1.769-5.419-2.995-7.817-5.058-9.818-14.099-16.738-23.836-21.499-1.005-.483-2.009-.967-3.051-1.334.079.114.157.227.236.38l.001.038.038-.001c-.116-.075-.194-.15-.31-.225-3.935 3.55-8.133 7.449-11.716 11.377 2.368 1.92 5.805 3.479 7.512 4.757 4.034 2.968 7.917 6.131 12.101 8.905 5.619 3.789 11.606 6.536 18.297 7.738 2.577.46 3.926.938 3.896-1.056-.043-.306-.088-.728-.173-1.263z"
      fill="#F8AE9D"
    />
    <path
      d="M510.698 308.559c-2.606-4.908-6.652-8.643-11.074-11.951-3.104-2.331-6.395-4.429-9.535-6.567-.891-.6-2.641-2.223-4.149-3.005-3.14 2.847-6.354 5.849-9.26 8.961 9.6 5.838 18.153 13.455 28.686 17.59.965.369 1.968.738 3.003.76 1.036.023 2.142-.416 2.742-1.269.939-1.318.337-3.111-.413-4.519z"
      fill="#F8AE9D"
    />
    <path
      d="M646.757 344.219c-10.635 2.52-21.883-6.499-21.883-6.499s6.003-13.1 16.641-15.611c10.635-2.52 21.88 6.492 21.88 6.492s-6.003 13.099-16.638 15.618z"
      fill="url(#e)"
    />
    <path
      d="M583.228 507.771c9.426 6.493 23.827 1.955 23.827 1.955s-.892-15.064-10.325-21.551c-9.426-6.493-23.82-1.96-23.82-1.96s.891 15.064 10.318 21.556z"
      fill="url(#f)"
    />
    <path
      d="M152.063 388.886c14.909 15.175 42.79 11.975 42.79 11.975s3.689-27.803-11.234-42.969c-14.91-15.175-42.777-11.984-42.777-11.984s-3.689 27.803 11.221 42.978z"
      fill="url(#g)"
    />
    <ellipse
      cx={724.6}
      cy={314.191}
      rx={15.347}
      ry={15.348}
      transform="rotate(180 724.6 314.191)"
      fill="#6f381e"
    />
    <circle
      cx={284.074}
      cy={405.074}
      r={13.074}
      transform="rotate(180 284.074 405.074)"
      fill="#6f381e"
    />
    <circle
      r={11.937}
      transform="matrix(-1 0 0 1 251.664 212.858)"
      fill="#6f381e"
    />
    <circle
      r={14.135}
      transform="matrix(-1 0 0 1 616.522 220.892)"
      fill="#6f381e"
    />
    <circle
      r={5.684}
      transform="matrix(-1 0 0 1 685.378 364.988)"
      fill="#E1E4E5"
    />
    <circle r={9.5} transform="matrix(-1 0 0 1 230.5 412.5)" fill="#E1E4E5" />
    <circle
      r={6.588}
      transform="matrix(-1 0 0 1 689.692 241.767)"
      fill="#E1E4E5"
    />
    <circle
      r={10.056}
      transform="matrix(-1 0 0 1 669.284 152.012)"
      fill="#E1E4E5"
    />
    <circle
      r={6.578}
      transform="scale(1 -1) rotate(-75 -19.096 -340.822)"
      fill="#E1E4E5"
    />
    <circle
      r={6.253}
      transform="matrix(-1 0 0 1 192.547 243.705)"
      fill="#E1E4E5"
    />
    <path
      d="M758.794 182.883h.176c1.043 14.774 12.03 15.001 12.03 15.001s-12.116.237-12.116 17.308c0-17.071-12.116-17.308-12.116-17.308s10.983-.227 12.026-15.001zM601.907 107.85h.176c1.042 14.774 12.03 15.001 12.03 15.001s-12.116.237-12.116 17.308c0-17.071-12.116-17.308-12.116-17.308s10.983-.227 12.026-15.001zm7.958 239.878h.176c1.042 14.774 12.03 15.002 12.03 15.002s-12.116.236-12.116 17.307c0-17.071-12.116-17.307-12.116-17.307s10.983-.228 12.026-15.002zM270.936 452.32h.107c.636 9.011 7.337 9.149 7.337 9.149s-7.389.145-7.389 10.556c0-10.411-7.39-10.556-7.39-10.556s6.699-.138 7.335-9.149zm58.123-255.795h.176c1.043 14.774 12.031 15.002 12.031 15.002s-12.116.236-12.116 17.307c0-17.071-12.116-17.307-12.116-17.307s10.983-.228 12.025-15.002zM322.044 89.66h.206c1.223 17.675 14.111 17.947 14.111 17.947s-14.211.283-14.211 20.706c0-20.423-14.211-20.706-14.211-20.706s12.882-.272 14.105-17.947z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={616.66}
        y1={338.067}
        x2={526.442}
        y2={338.469}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={730.809}
        y1={478.533}
        x2={607.586}
        y2={479.312}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={286.866}
        y1={433.894}
        x2={377.085}
        y2={433.492}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={172.717}
        y1={293.428}
        x2={295.94}
        y2={292.648}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={606.709}
        y1={350.484}
        x2={699.807}
        y2={306.501}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={619.947}
        y1={529.075}
        x2={545.745}
        y2={450.831}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={211.55}
        y1={440.72}
        x2={103.761}
        y2={271.753}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg108);
const Memo = memo(ForwardRef);
export default Memo;