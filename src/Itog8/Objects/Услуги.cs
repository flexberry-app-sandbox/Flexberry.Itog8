﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Itog8
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Перечень услуг.
    /// </summary>
    // *** Start programmer edit section *** (Услуги CustomAttributes)

    // *** End programmer edit section *** (Услуги CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПереченьУслугE", new string[] {
            "Наименование as \'Наименование\'"})]
    [View("ПереченьУслугL", new string[] {
            "Наименование as \'Наименование\'"})]
    [View("УслугиE", new string[] {
            "Наименование as \'Наименование\'",
            "ЗатрВремя as \'Затр время\'",
            "ЗатрВремя.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "ЗатрВремя.Наименование"})]
    [MasterViewDefineAttribute("УслугиE", "ЗатрВремя", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("УслугиL", new string[] {
            "Наименование as \'Наименование\'"})]
    public class Услуги : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Itog8.Услуга fНаименование;
        
        private IIS.Itog8.ЗатрВремя fЗатрВремя;
        
        // *** Start programmer edit section *** (Услуги CustomMembers)

        // *** End programmer edit section *** (Услуги CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Услуги.Наименование CustomAttributes)

        // *** End programmer edit section *** (Услуги.Наименование CustomAttributes)
        public virtual IIS.Itog8.Услуга Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Услуги.Наименование Get start)

                // *** End programmer edit section *** (Услуги.Наименование Get start)
                IIS.Itog8.Услуга result = this.fНаименование;
                // *** Start programmer edit section *** (Услуги.Наименование Get end)

                // *** End programmer edit section *** (Услуги.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуги.Наименование Set start)

                // *** End programmer edit section *** (Услуги.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Услуги.Наименование Set end)

                // *** End programmer edit section *** (Услуги.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Перечень услуг.
        /// </summary>
        // *** Start programmer edit section *** (Услуги.ЗатрВремя CustomAttributes)

        // *** End programmer edit section *** (Услуги.ЗатрВремя CustomAttributes)
        [PropertyStorage(new string[] {
                "ЗатрВремя"})]
        [NotNull()]
        public virtual IIS.Itog8.ЗатрВремя ЗатрВремя
        {
            get
            {
                // *** Start programmer edit section *** (Услуги.ЗатрВремя Get start)

                // *** End programmer edit section *** (Услуги.ЗатрВремя Get start)
                IIS.Itog8.ЗатрВремя result = this.fЗатрВремя;
                // *** Start programmer edit section *** (Услуги.ЗатрВремя Get end)

                // *** End programmer edit section *** (Услуги.ЗатрВремя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуги.ЗатрВремя Set start)

                // *** End programmer edit section *** (Услуги.ЗатрВремя Set start)
                this.fЗатрВремя = value;
                // *** Start programmer edit section *** (Услуги.ЗатрВремя Set end)

                // *** End programmer edit section *** (Услуги.ЗатрВремя Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПереченьУслугE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПереченьУслугE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПереченьУслугE", typeof(IIS.Itog8.Услуги));
                }
            }
            
            /// <summary>
            /// "ПереченьУслугL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПереченьУслугL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПереченьУслугL", typeof(IIS.Itog8.Услуги));
                }
            }
            
            /// <summary>
            /// "УслугиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугиE", typeof(IIS.Itog8.Услуги));
                }
            }
            
            /// <summary>
            /// "УслугиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугиL", typeof(IIS.Itog8.Услуги));
                }
            }
        }
    }
}
