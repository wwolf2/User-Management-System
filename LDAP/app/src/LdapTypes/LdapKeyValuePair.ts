export default class LdapKeyValuePair
    {
        protected key:string;
        protected value:string;
        public ldapKVString():string
        {
            return (this.key + "=" + this.value);
        }
        protected constructor(key:string, value:string)
        {
            this.key=key;
            this.value=value;
        }
    }