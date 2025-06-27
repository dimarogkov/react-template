export const BTN_USAGE_CODE = `{/* Default Button */}
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

export const BTN_LINK_USAGE_CODE = `<Btn isLink>
	<Btn.Link href='/'>Link Button</Btn.Link>
</Btn>`;
