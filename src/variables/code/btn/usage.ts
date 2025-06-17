export const BTN_USAGE_CODE = `import { EnumBtn } from '../../../types/enums';
import { Btn } from '../../ui';

{/* Default Button */}
<Btn>Default Button</Btn>

{/* Secondary Button */}
<Btn btnType={EnumBtn.secondary}>Secondary Button</Btn>

{/* Outline Button */}
<Btn btnType={EnumBtn.outline}>Outline Button</Btn>

{/* Ghost Button */}
<Btn btnType={EnumBtn.ghost}>Ghost Button</Btn>

{/* Button with Icon */}
<Btn>
	<User className='size-5' />
	<span>Icon Button</span>
</Btn>`;
